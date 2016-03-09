var postmark = require("postmark");
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
    var config = require('../.env/config.js');
    var client = new postmark.Client(config.POSTMARK_API_KEY);
} else {
    var client = new postmark.Client(config.POSTMARK_API_KEY);
};

var sendEmail = function(email) {
    var email = {
        "From": "lwkr@ux.dob.jp",
        "To": email.To,
        "Subject": email.Subject,
        "TextBody": email.TextBody

    }

    return new Promise(function (resolve, reject) {
        client.sendEmail(email, function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(success);
            }
        });
    });

}

module.exports.sendEmail = sendEmail;