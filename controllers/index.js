var express = require('express');, router = express.Router();

router.use('/health', require('./health'));

router.get('/', function(req, res) {
	res.json({
		"status": 200,
		"message": "Mailgrid API Root"
	});
});

module.exports = router;