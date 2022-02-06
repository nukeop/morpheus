import { CommandInteraction } from 'discord.js';
import { sample } from 'lodash';

const symbols = ['🍉', '🍌', '🍒', '🍋', '🍊', '🔔', '🍀', '💎', '💲', '7️⃣'];

export const execute = async (interaction: CommandInteraction) => {
  const result = [sample(symbols), sample(symbols), sample(symbols)];

  if (result[0] === result[1] && result[1] === result[2]) {
    await interaction.reply(result.join(' '));
  } else {
    await interaction.reply(result.join(' '));
  }
};
