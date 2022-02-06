import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import ytsr from 'ytsr';

import { Command } from '../commandHandler';
import Logger from '../logger';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('yt')
    .setDescription('Search on Youtube')
    .addStringOption((option) =>
      option
        .setName('query')
        .setDescription('The query to search for')
        .setRequired(true)
    )
    .toJSON(),
  async execute(interaction: CommandInteraction) {
    const query = interaction.options.getString('query') as string;

    if (!query) {
      await interaction.reply({
        content: 'You need to specify a query!',
        ephemeral: true,
      });
      return;
    }

    Logger.info(`Searching for \'${query}\'`);
    const queryFilter = await ytsr.getFilters(query ?? '');
    const videoFilter = queryFilter.get('Type')?.get('Video');

    if (!videoFilter || !videoFilter.url) {
      await interaction.reply({
        content: 'No results found!',
        ephemeral: true,
      });
      return;
    }

    const result = (await ytsr(videoFilter.url, { limit: 1 }))
      .items[0] as ytsr.Video;

    await interaction.reply(`Query: ${query}\n${result?.url}`);
  },
};

export default command;
