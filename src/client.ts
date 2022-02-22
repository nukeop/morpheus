import { Client } from 'discord.js';
import { CommandHandler } from './commandHandler';
import Logger from './logger';

export class BotClient {
  start() {
    Logger.info('Starting bot...');
    const client = new Client({ intents: [] });
    const handler = CommandHandler.instance;

    client.once('ready', () => {
      Logger.info('Client ready!');
    });

    client.on('interactionCreate', async (interaction) => {
      try {
        if (!interaction.isCommand()) return;
      } catch (error) {
        Logger.error(error);
        return;
      }

      try {
        const command = handler.get(interaction.commandName);

        if (!command) return;
        await command.execute(interaction);
      } catch (error) {
        Logger.error(error);
        await interaction.reply({
          content: 'There was an error while executing this command!',
          ephemeral: true,
        });
      }
    });

    client.login(process.env.TOKEN);
  }
}
