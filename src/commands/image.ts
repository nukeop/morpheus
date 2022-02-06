import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../commandHandler';
import { execute } from './controllers/images';

export default {
  data: new SlashCommandBuilder()
    .setName('image')
    .setDescription('Image search')
    .addStringOption((option) =>
      option
        .setName('query')
        .setDescription('The query to search for')
        .setRequired(true)
    )
    .toJSON(),
  execute,
} as Command;
