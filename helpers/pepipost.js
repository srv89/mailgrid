var request = require('request');
var config = require('../.env/config.js');

console.log(config.PEPIPOST_API_KEY);

var options = {
	url:'https://app.pepipost.com/', 
	api_key: config.PEPIPOST_API_KEY,
	subject: "Hello World!",
	fromname: "Sarvesh Sadhoo",
	from: "sample@mailgrid.herokuapp.com" ,
	recipients: "sarveshsadhoo@gmail.com" ,
	content: "First Email" 
}

request.post(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }

});