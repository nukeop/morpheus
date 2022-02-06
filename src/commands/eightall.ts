import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../commandHandler';

import { execute } from './controllers/eightball';

export default {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask a question')
    .addStringOption((option) =>
      option
        .setName('question')
        .setDescription('The question to ask')
        .setRequired(true)
    )
    .toJSON(),
  execute,
} as Command;
