const fetch = require('node-fetch');
const slurURL = 'http://rsdb.org/api/json/all';
let slurs = '';

if(slurs == '') {
	fetch(slurURL)
	.then(res => res.json())
	.then(json => {
		slurs = json;
		exports.data = slurs;
	}).catch(err => console.log(err));  
} else {
	exports.data == slurs;
}
					