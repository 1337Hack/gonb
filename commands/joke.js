const Discord = require('discord.js');
const fetch = require('node-fetch');
const jokeURL = 'https://sv443.net/jokeapi/v2/joke/Any';

module.exports = {
        name: 'joke',
        description: 'A random joke',
        cooldown: 1.5,
        execute(message, args) {

            fetch(jokeURL).catch(err => console.log(err))
            .then(res => res.json())
            .then(json => {
                const joke = json;

                if(joke.type === 'twopart') {
                    message.channel.send(joke.setup)
                    .then(_ => setTimeout(_ => message.channel.send(joke.delivery), 3000))
                    .catch(error => console.log(error));
                } else {
                    message.channel.send(joke.joke);
                }
            }).catch(err => console.log(err));  

        },
};