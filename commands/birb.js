const fs = require('fs');
const fetch = require('node-fetch');
const birbURL = "https://random.birb.pw/"
let birbEXT;

module.exports = {
	name: 'birb',
	description: 'Random birb pic',
	cooldown: 5,
	execute(message, args) {
		fetch(birbURL + 'tweet')
	    .then(res => res.text())
	    .then(body => { 
	    	birbEXT = body.split('.')[1];
	    	fetch(`${birbURL}img/${body}`).then(res => {
		        const dest = fs.createWriteStream(`./tmp/birb.${birbEXT}`);
		        res.body.pipe(dest);
		        setTimeout(_ => message.channel.send("", { files: [`./tmp/birb.${birbEXT}`] }), 1000);
	    	});
		}).catch(err => console.log(err));  
	},
};