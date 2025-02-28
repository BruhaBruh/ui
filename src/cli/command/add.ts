/* eslint-disable @typescript-eslint/no-use-before-define */
import { Command } from 'commander';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import ora from 'ora';
import path from 'path';
import packageJson from '../../../package.json';
import { Config, Registry } from '../types';
import { addDependency } from '../utils/add-dependency';
import { getPackageManager } from '../utils/get-package-manager';
import { highlighter } from '../utils/highlighter';
import { logger } from '../utils/logger';

export const add = new Command()
  .name('add')
  .description('add a components to your project')
  .option('-c, --config', 'Configuration file.', 'ui.config.json')
  .action(async (opts) => {
    if (!existsSync(opts.config)) {
      logger.log(
        `${highlighter.error('Error!')} Project must be initialized by running pnpm dlx @bruhabruh/ui init`,
      );
      return;
    }

    const config = JSON.parse(
      await readFile(opts.config as string, { encoding: 'utf-8' }),
    ) as Config;

    const registrySpinner = ora(`Getting registry`).start();
    const registry = (await fetch(config.registry).then((r) =>
      r.json(),
    )) as Registry;
    // const registry = JSON.parse(
    //   await readFile('./public/registry.json', { encoding: 'utf-8' }),
    // ) as Registry;
    registrySpinner.succeed();

    await installDependencies(registry.dependencies, registry.devDependencies);

    await addFiles(registry.files, config);

    logger.log(`${highlighter.success('Success!')} Files is added.`);
    logger.break();
  });

const installDependencies = async (
  dependencies: string[],
  devDependencies: string[],
) => {
  const packageManager = await getPackageManager(process.cwd());

  const installedDependencies = Object.keys(packageJson.dependencies);
  const installedDevDependencies = Object.keys(packageJson.devDependencies);

  for (let i = 0; i < dependencies.length; i++) {
    const dependency = dependencies[i];
    const split = dependency.split('@');
    const dependencyName =
      split.length === 1 || (dependency.startsWith('@') && split.length === 2)
        ? split.join('@')
        : split.slice(0, -1).join('@');
    if (installedDependencies.includes(dependencyName)) continue;
    const dependencySpinner = ora(
      `Installing ${dependency} dependency`,
    ).start();
    await addDependency(dependency, packageManager);
    dependencySpinner.succeed();
  }

  for (let i = 0; i < devDependencies.length; i++) {
    const dependency = devDependencies[i];
    const split = dependency.split('@');
    const dependencyName =
      split.length === 1 || (dependency.startsWith('@') && split.length === 2)
        ? split.join('@')
        : split.slice(0, -1).join('@');
    if (installedDependencies.includes(dependencyName)) continue;
    if (installedDevDependencies.includes(dependencyName)) continue;
    const dependencySpinner = ora(
      `Installing ${dependency} dev dependency`,
    ).start();
    await addDependency(dependency, packageManager, true);
    dependencySpinner.succeed();
  }
};

const addFiles = async (files: Registry['files'], config: Config) => {
  for (let i = 0; i < files.length; i++) {
    await addFile(files[i], config);
  }
};

const addFile = async (file: Registry['files'][number], config: Config) => {
  const directory = config.directories[file.type];
  const filePath = `${directory}/${file.name}`;
  let content = file.content;
  const types: Registry['files'][number]['type'][] = [
    'components',
    'hooks',
    'config',
    'tailwind',
    'types',
    'utility',
  ];
  types.forEach((type) => {
    content = content.replaceAll(`@/${type}`, config.aliases[type]);
  });
  const fileSpinner = ora(`Adding ${file.name}`).start();
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
  fileSpinner.succeed();
};
