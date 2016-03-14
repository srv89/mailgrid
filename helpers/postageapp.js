var uuid = require('node-uuid');
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
	var config = require('../.env/config.js');
	var postageapp = require('postageapp')(config.POSTAGEAPP_API_KEY);
} else {
	var postageapp = require('postageapp')(process.env.POSTAGEAPP_API_KEY);
};



var sendEmail = function (email) {
	var email = {
		uid: uuid.v4(),
		recipients: email.To,
		subject: email.Subject,
		from: 'lwkr@ux.dob.jp',

		content: {
			'text/plain': email.TextBody
		}
	}

	return new Promise(function(resolve, reject) {
		postageapp.sendMessage(email,
			function(response, object) {
				resolve(response)
			},
			function(err, object) {
				reject(err)
			})
	});
}

module.exports.sendEmail = sendEmail;