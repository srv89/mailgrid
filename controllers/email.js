var express = require('express'),
	router = express.Router(),
	_ = require('underscore');

var remoteHandler = require('../helpers/remoteHandler.js');


// POST /email
router.post('/', function(req, res) {
	var body = _.pick(req.body, 'From', 'To', 'Cc', 'Bcc', 'Subject', 'HtmlBody', 'TextBody', 'ReplyTo');
	
	remoteHandler.executeRequest(body).then(function (success) {
		res.json(success);
        console.log(1);
	}, function (error) {
		res.status(500).json(error);
        console.log(2);
	}).catch(function (error) {
        console.log(3);
		res.status(500).send()
	})
});



module.exports = router