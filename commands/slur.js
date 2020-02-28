const Discord = require('discord.js');
const slurs = require('../util/slurs.js');

module.exports = {
        name: 'slur',
        description: 'A random racial slur',
        cooldown: 1.5,
        execute(message, args) {
                let r = Math.floor((Math.random() * Object.keys(slurs.data).length) + 1);
                const embed = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(slurs.data[r].s)
                .addField('Race', slurs.data[r].r, true)
                .setDescription(slurs.data[r].d);

                message.channel.send(embed);
        },
};