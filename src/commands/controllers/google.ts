import { CommandInteraction, MessageEmbed } from 'discord.js';
import google from 'googlethis';

export const execute = async (interaction: CommandInteraction) => {
  const query = interaction.options.getString('query') as string;
  const result = await google.search(query, { page: 0, safe: false });

  if (result.results.length > 0) {
    await interaction.reply({
      embeds: [
        new MessageEmbed()
          .setTitle(query)
          .addField('Title', result.results[0].title, true)
          .setDescription(result.results[0].description)
          .setThumbnail(result.results[0].favicons?.high_res)
          .setURL(result.results[0].url),
      ],
    });
  } else {
    await interaction.reply({
      content: 'No results found!',
      ephemeral: true,
    });
  }
};
