var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
	var config = require('../.env/config.js');
	var SENDGRID_API_KEY = config.SENDGRID_API_KEY;
} else {
	var SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
};

var sendgrid = require('sendgrid')(SENDGRID_API_KEY);


var email     = new sendgrid.Email({
  to:       'sarveshsadhoo@gmail.com',
  from:     'emails@mailgrid.herokuapp.com',
  fromname: 'Mailgrid App',
  subject:  'Subject goes here',
  text:     'Hello world'
});

sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});