var express = require('express')
  , router = express.Router();

router.use('/health', require('./health'));
router.use('/email', require('./email'));

router.get('/', function(req, res) {
	res.json({
		"status": 200,
		"message": "Mailgrid API Root"
	});
});

module.exports = router;