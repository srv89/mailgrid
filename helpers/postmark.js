var postmark = require("postmark");
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
    var config = require('../.env/config.js');
    var client = new postmark.Client(config.POSTMARK_API_KEY);
} else {
    var client = new postmark.Client(process.env.POSTMARK_API_KEY);
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
            if (success) {
                resolve(success);
            } else {
                reject(error);
            }
        });
    });

}

module.exports.sendEmail = sendEmail;