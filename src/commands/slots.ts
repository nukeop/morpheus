import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../commandHandler';

import { execute } from './controllers/slots';

export default {
  data: new SlashCommandBuilder()
    .setName('slots')
    .setDescription('Play slots')
    .toJSON(),
  execute,
} as Command;
