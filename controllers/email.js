var express = require('express'),
	router = express.Router(),
	_ = require('underscore');

var remoteHandler = require('../helpers/remoteHandler.js');


// POST /email
router.post('/', function(req, res) {
	var body = _.pick(req.body, 'From', 'To', 'Cc', 'Bcc', 'Subject', 'HtmlBody', 'TextBody', 'ReplyTo');
	
	remoteHandler.executeRequest(body).then(function (success) {
		res.json({"message": "OK"});
	}, function (error) {
		res.status(500).json({"message": "Failure"});
	}).catch(function (error) {
        res.status(500).json({"message": "Failure Catch"});
    })
});



module.exports = router