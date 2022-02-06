import dotenv from 'dotenv';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { BotClient } from './client';
import { CommandHandler } from './commandHandler';
import commands from './commands';
import Logger from './logger';

(async () => {
  dotenv.config();
  const handler = CommandHandler.instance;
  handler.bulkRegister(commands);

  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN ?? '');

  await rest
    .put(Routes.applicationCommands(process.env.CLIENT_ID ?? ''), {
      body: handler.getRegisteringData(),
    })
    .then(() => Logger.info('Successfully registered application commands.'))
    .catch(Logger.error);

  new BotClient().start();
})();
