import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

import { Command } from '../commandHandler';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('alerta')
    .setDescription('Alerta de macaco')
    .toJSON(),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('https://www.youtube.com/watch?v=ur-ggo4Aek8');
  },
};

export default command;
