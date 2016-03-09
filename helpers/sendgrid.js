var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
  var config = require('../.env/config.js');
  var SENDGRID_API_KEY = config.SENDGRID_API_KEY;
} else {
  var SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
};

var sendgrid = require('sendgrid')(SENDGRID_API_KEY);


var sendEmail = function(email) {

  var email = new sendgrid.Email({
    to: email.To,
    from: 'lwkr@ux.dob.jp',
    fromname: 'Mailgrid App',
    subject: email.Subject,
    text: email.TextBody
  });

  return new Promise(function(resolve, reject) {
    sendgrid.send(email, function(err, json) {
      if (err) {
        reject(err);
      } else {
        resolve(json);
      }

    });

  });
}


module.exports.sendEmail = sendEmail