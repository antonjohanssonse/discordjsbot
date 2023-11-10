const { Events } = require('discord.js')

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    console.log(
      'message',
      message.content,
      message.author.bot,
      message.author.tag,
      message.channel.id,
      typeof message.channel.id,
    )
    if (message.author.bot) return
    if (message.channel.id === '1152222156843909133') {
      message.react('👍')
      message.react('👎')
    }
  },
}
