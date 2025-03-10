import { Command } from 'commander';
import { writeFile } from 'fs/promises';
import prompts from 'prompts';
import type { Config } from '../types';
import { highlighter } from '../utils/highlighter';
import { logger } from '../utils/logger';

export const init = new Command()
  .name('init')
  .description('initialize your project and install dependencies')
  .action(async () => {
    const config = (await prompts([
      {
        type: 'text',
        name: 'registry',
        message: `Registry configuration:`,
        initial: 'https://ui.bruhabruh.ru/registry.json',
      },
      {
        type: 'text',
        name: 'directory',
        message: `Configure the destination for @bruhabruh/ui:`,
        initial: 'src/shared/bruhabruh-ui',
      },
      {
        type: 'text',
        name: 'alias',
        message: `Configure the import alias for @bruhabruh/ui:`,
        initial: '@/shared/bruhabruh-ui',
      },
    ])) as Config;

    await writeFile('./ui.config.json', JSON.stringify(config, null, 2));

    logger.log(
      `${highlighter.success('Success!')} Project initialization completed.`,
    );
    logger.break();
  });
