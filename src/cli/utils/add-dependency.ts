import { exec } from 'node:child_process';
import { logger } from './logger';

export const addDependency = async (
  dependency: string,
  packageManager: 'yarn' | 'pnpm' | 'bun' | 'npm' | 'deno',
  isDev = false,
) => {
  let command = `npm i ${dependency}` + (isDev ? ' --save-dev' : '');
  if (packageManager === 'yarn') {
    command = `yarn add ${dependency}` + (isDev ? ' --dev' : '');
  } else if (packageManager === 'pnpm') {
    command = `pnpm add ${dependency}` + (isDev ? ' --save-dev' : '');
  } else if (packageManager === 'bun') {
    command = `bun add ${dependency}` + (isDev ? ' --dev' : '');
  } else if (packageManager === 'deno') {
    logger.error('Deno is not supported!');
    process.exit(1);
  }

  return new Promise<string>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Fail run command: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Error: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
};
