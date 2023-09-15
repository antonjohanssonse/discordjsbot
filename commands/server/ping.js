const { SlashCommandBuilder } = require('discord.js')
const { adminId } = require('../../config.json')

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong! hihi'),
  async execute(interaction) {
    if (interaction.user.id === adminId) {
      await interaction.reply({ content: 'Secret Admin Pong!', ephemeral: true })
    } else {
      await interaction.reply({ content: 'Secret Pong!', ephemeral: false })
    }
    // https://discordjs.guide/slash-commands/response-methods.html#ephemeral-responses
    // Ephemeral responses are only visible to the user who ran the command.

    /*
    await wait(2000);
    await interaction.followUp('Pong again!')
		await interaction.editReply('Pong again!');
    */
  },
}
