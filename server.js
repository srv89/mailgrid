var express = require('express');
var morgan = require('morgan');

var app = express();

var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') {
	app.use(morgan('common'));
}


app.get('/health', function (req, res) {
	res.json({"message":"Health Check Ok"});
});

app.listen(PORT, function() {
	console.log('Express listening on PORT ' + PORT + '!');
});