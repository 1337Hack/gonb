const Discord = require('discord.js');

module.exports = {
        name: 'invite',
        description: 'A link to invite the bot to your discord server',
        cooldown: 5,
        execute(message, args) {
                const embed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Invite Gonb')
		.setURL('https://discordapp.com/api/oauth2/authorize?client_id=678037877061582909&permissions=391232&scope=bot')
                .setDescription('Invite Gonb bot to your own discord server.');
                message.channel.send(embed);
        },
};
