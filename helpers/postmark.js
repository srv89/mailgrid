var postmark = require("postmark");
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
	var config = require('../.env/config.js');
	var client = new postmark.Client(config.POSTMARK_API_KEY);
} else {
	var client = new postmark.Client(config.POSTMARK_API_KEY);
};


client.sendEmail({
    "From": "lwkr@ux.dob.jp", 
    "To": "sarveshsadhoo@gmail.com", 
    "Subject": "Test", 
    "TextBody": "Test Message"

}, function(error, success) {
    if(error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
    }
    console.info("Sent to postmark for delivery")
    console.log(success)
});