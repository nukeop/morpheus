import google from 'googlethis';
import { CommandInteraction, MessageEmbed } from 'discord.js';

export const execute = async (interaction: CommandInteraction) => {
  const query = interaction.options.getString('query') as string;
  const result = (await google.image(query, { safe: false }))[0]?.url;
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
