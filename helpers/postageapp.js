var uuid = require('node-uuid');
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
	var config = require('../.env/config.js');
	var postageapp = require('postageapp')(config.POSTAGEAPP_API_KEY);
} else {
	var postageapp = require('postageapp')(process.env.POSTAGEAPP_API_KEY);
};


var email = {
	uid: uuid.v4(),
	recipients: 'sarveshsadhoo@gmail.com',
	subject: 'Test Message: PostageApp',
	from: 'lwkr@ux.dob.jp',

	content: {
		'text/html': '<strong>Sample bold content.</strong>',
		'text/plain': 'Plain text goes here'
	}
}


postageapp.sendMessage(email, 
	function (response, object) {
		console.log('HTTP Status code: ', response.statusCode);
    	console.log('Message UID', object.response.uid);
	}, function (err, object) {
		 console.log('Ack! An error has occurred: ', err);
})