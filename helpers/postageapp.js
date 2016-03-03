var config = require('../.env/config.js')
console.log(config.POSTAGEAPP_API_KEY);
var postageapp = require('postageapp')(config.POSTAGEAPP);


var options = {
	recipients: "sarveshsadhoo@gmail.com",

	subject: "Subject Line",
	from: "draven7@tt2dx90.com",

	content: {
		'text/html': '<strong>Sample bold content.</strong>',
		'text/plain': 'Plain text goes here'
	}
}

postageapp.sendMessage(options, 
	function (response, object) {
		console.log('HTTP Status code: ', response.statusCode);
    	console.log('Message UID', object.response.uid);
	}, function (err, object) {
		 console.log('Ack! An error has occurred: ', err);
})