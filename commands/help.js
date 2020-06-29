const { prefix } = require('../config.json');

module.exports = {
        name: 'help',
        description: 'List all commands.',
        aliases: ['commands'],
        usage: '[command name]',
        cooldown: 5,
        execute(message, args) {
                const data = [];
                const { commands } = message.client;

                data.push('Commands:');
                data.push(commands.map(command => command.name).join(', '));

                return message.author.send(data, { split: true }).then(() => {
                        if (message.channel.type === 'dm') return;
                                message.reply('Check your DMs');
                        })
                        .catch(error => {
                                console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                                message.reply('I can\'t DM you');
                        });
        },
 };