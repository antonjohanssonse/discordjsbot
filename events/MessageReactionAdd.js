const { Events } = require('discord.js')

//todo

const reactionToRole = {
  '🇸🇪': '1153036066044006511',
}

module.exports = {
  name: Events.MessageReactionAdd,
  async execute(reaction, user) {
    console.log('reaction', reaction.message.id)
    console.log('emoji name', reaction.emoji.name)

    // Check if the reaction is on the correct message
    if (reaction.message.id !== '1153035201295941652') return
    console.log('user', user)

    // Check if the reaction is the correct emoji
    if (reactionToRole[reaction.emoji.name]) {
      try {
        // Get the role to add to the user
        const role = reaction.message.guild.roles.cache.get(reactionToRole[reaction.emoji.name])
        console.log('role', role?.id)

        // Check if the role exists
        if (!role) throw new Error('Role does not exist')

        // Get the member to add the role to
        const member = reaction.message.guild.members.cache.get(user.id)

        // Check if the member exists
        if (!member) throw new Error('Member does not exist')

        // Add the role to the member
        await member.roles.add(role.id)
      } catch (error) {
        console.error(error)
      }
    }
  },
}
