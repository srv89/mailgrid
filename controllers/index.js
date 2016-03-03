var express = require('express')
  , router = express.Router()

router.use('/health', require('./health'))

router.get('/', function(req, res) {
  res.send('Mailgrid API Root')
})

module.exports = router
