//var sendgrid = require('./sendgrid.js');
var postmark = require('./postmark.js');
var sendgrid = require('./sendgrid.js');
//var postageapp = require('./postageapp.js');

var executeRequest = function(payload) {

	return new Promise(function (resolve, reject) {
		sendgrid.sendEmail(payload).then (function(success) {
            console.log(success)
			resolve(success);
		}, function(error) {
			reject(error)
		})
	});

}



module.exports.executeRequest = executeRequest;