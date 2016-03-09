var postmark = require('./postmark.js');
var sendgrid = require('./sendgrid.js');
var postageapp = require('./postageapp.js');

var executeRequest = function(payload) {

	return new Promise(function (resolve, reject) {
		postageapp.sendEmail(payload).then (function(success) {
            console.log("remoteHandler success: " + success);
			resolve(success);
		}, function(error) {
            console.log("remoteHandler Error: " + error);
			reject(error);
		})
	});

}



module.exports.executeRequest = executeRequest;