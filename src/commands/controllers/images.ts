import { search } from 'ddgimages-node';
import { CommandInteraction, MessageEmbed } from 'discord.js';

export const execute = async (interaction: CommandInteraction) => {
  const query = interaction.options.getString('query') as string;
  const result = (await search(query))[0]?.image;
  if (result) {
    await interaction.reply({
      embeds: [new MessageEmbed().setTitle(query).setImage(result)],
    });
  } else {
    await interaction.reply({
      content: 'No results found!',
      ephemeral: true,
    });
  }
};
