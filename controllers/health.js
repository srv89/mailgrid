var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  res.json({"message": "Health Check OK"})
})

module.exports = router