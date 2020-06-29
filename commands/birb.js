const Discord = require("discord.js");
const fs = require('fs');
const fetch = require('node-fetch');
const birbURL = "https://some-random-api.ml/img/birb"

module.exports = {
	name: 'birb',
	description: 'Random birb pic',
	cooldown: 5,
	async execute(message, args) {
		try {
			const response = await fetch(birbURL);
			const json = await response.json();

			const file = new Discord.MessageAttachment(json.link);
			message.channel.send({ files: [file]});
		} catch(err) {
			message.channel.send("error");
			console.log(err);
		}
	},
};
