var postmark = require('./postmark.js');
var sendgrid = require('./sendgrid.js');
var postageapp = require('./postageapp.js');


function getEmailService() {
    var emailServiceName = {
        1: 'sendgrid',
        2: 'postageapp',
        3: 'postmark'
    }

    var emailServiceObject = {
        1: sendgrid,
        2: postageapp,
        3: postmark

    }

    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("emailServiceName: ", emailServiceName[randomNumber])
    return emailServiceObject[randomNumber];

}


var executeRequest = function(payload) {
    return new Promise(function(resolve, reject) {
        getEmailService().sendEmail(payload).then(function(success) {
            console.log("remoteHandler success");
            resolve(success);
        }, function(error) {
            console.log("remoteHandler Error");
            reject(error);
        })
    });

}



module.exports.executeRequest = executeRequest;