import { Command } from 'commander';
import { writeFile } from 'fs/promises';
import prompts from 'prompts';
import { Config } from '../types';
import { highlighter } from '../utils/highlighter';
import { logger } from '../utils/logger';

export const init = new Command()
  .name('init')
  .description('initialize your project and install dependencies')
  .action(async () => {
    const { registry } = (await prompts([
      {
        type: 'text',
        name: 'registry',
        message: `Registry configuration:`,
        initial: 'https://ui.bruhabruh/registry.json',
      },
    ])) as Pick<Config, 'registry'>;

    const directories = (await prompts([
      {
        type: 'text',
        name: 'components',
        message: `Configure the destination for components:`,
        initial: 'src/components',
      },
      {
        type: 'text',
        name: 'config',
        message: `Configure the destination for config:`,
        initial: 'src/config',
      },
      {
        type: 'text',
        name: 'hooks',
        message: `Configure the destination for hooks:`,
        initial: 'src/hooks',
      },
      {
        type: 'text',
        name: 'tailwind',
        message: `Configure the destination for tailwind:`,
        initial: 'src/tailwind',
      },
      {
        type: 'text',
        name: 'types',
        message: `Configure the destination for types:`,
        initial: 'src/types',
      },
      {
        type: 'text',
        name: 'utility',
        message: `Configure the destination for utility:`,
        initial: 'src/utility',
      },
    ])) as Config['directories'];

    const aliases = (await prompts([
      {
        type: 'text',
        name: 'components',
        message: `Configure the import alias for components:`,
        initial: '@/components',
      },
      {
        type: 'text',
        name: 'config',
        message: `Configure the import alias for config:`,
        initial: '@/config',
      },
      {
        type: 'text',
        name: 'hooks',
        message: `Configure the import alias for hooks:`,
        initial: '@/hooks',
      },
      {
        type: 'text',
        name: 'tailwind',
        message: `Configure the import alias for tailwind:`,
        initial: '@/tailwind',
      },
      {
        type: 'text',
        name: 'types',
        message: `Configure the import alias for types:`,
        initial: '@/types',
      },
      {
        type: 'text',
        name: 'utility',
        message: `Configure the import alias for utility:`,
        initial: '@/utility',
      },
    ])) as Config['aliases'];

    const config: Config = {
      registry,
      directories,
      aliases,
    };

    await writeFile('./ui.config.json', JSON.stringify(config, null, 2));

    logger.log(
      `${highlighter.success('Success!')} Project initialization completed.`,
    );
    logger.break();
  });
