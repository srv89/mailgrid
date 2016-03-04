var express = require('express'),
	router = express.Router()

router.get('/', function(req, res) {
	res.json({
		"status": 200,
		"message": "Health Check OK"
	})
})

module.exports = router