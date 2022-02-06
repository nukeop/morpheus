import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../commandHandler';
import { execute } from './controllers/images';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('img')
    .setDescription('Image search')
    .addStringOption((option) =>
      option
        .setName('query')
        .setDescription('The query to search for')
        .setRequired(true)
    )
    .toJSON(),
  execute,
};

export default command;
