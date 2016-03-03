var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , morgan = require('morgan')

console.log();
var controller = require('./controllers/health.js')

var PORT = process.env.PORT || 3000
  , ENV = process.env.NODE_ENV || 'development'


if (ENV === 'development') {
	app.use(morgan('common'))
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./controllers'))

app.listen(PORT, function() {
  console.log('Express listening on PORT ' + PORT + '!')
})