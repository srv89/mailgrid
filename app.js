var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , morgan = require('morgan')
  

var PORT = process.env.PORT || 3000
  , ENV = process.env.NODE_ENV || 'development'


if (ENV === 'development') {
	app.use(morgan('common'))
};

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Express listening on PORT ' + PORT + '!')
})