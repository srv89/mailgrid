var postmark = require('./postmark.js');
var sendgrid = require('./sendgrid.js');
var postageapp = require('./postageapp.js');


function getEmailService() {
    var emailServiceName = {
        1: 'postmark',
        2: 'sendgrid',
        3: 'postageapp'
    }

    var emailServiceObject = {
        1: postmark,
        2: sendgrid,
        3: postageapp
    }

    var randomNumber = Math.floor(Math.random() * 3) + 1  ;
    console.log("emailServiceName: ", emailServiceName[randomNumber])
    return emailServiceObject[randomNumber];

}


var executeRequest = function(payload) {
    var emailService = getEmailService()
    console.log("emailService: ", emailService);

    return new Promise(function(resolve, reject) {
        emailService.sendEmail(payload).then(function(success) {
            console.log("remoteHandler success");
            resolve(success);
        }, function(error) {
            console.log("remoteHandler Error");
            reject(error);
        })
    });

}



module.exports.executeRequest = executeRequest;