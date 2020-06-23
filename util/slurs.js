const fetch = require('node-fetch');
const fs = require('fs');
const slurURL = 'http://rsdb.org/api/json/all';
let slurs = '';

if(slurs == '') {
	slurs = JSON.parse(fs.readFileSync('util/slurs.json', 'utf8'));
	exports.data = slurs;
	//fetch('./slurs.json').catch(err => console.log(err))
	//.then(res => res.json())
	//.then(json => {
	//	slurs = json;
	//	exports.data = slurs;
	//}).catch(err => console.log(err));  
} else {
	exports.data = slurs;
}	
