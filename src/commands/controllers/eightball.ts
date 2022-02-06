import { CommandInteraction, MessageEmbed } from 'discord.js';
import { sample } from 'lodash';

const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'All signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

export const execute = async (interaction: CommandInteraction) => {
  const answer = sample(answers);
  await interaction.reply({
    embeds: [
      new MessageEmbed({
        title: '🎱 8-Ball',
        description: answer,
      }),
    ],
  });
};
