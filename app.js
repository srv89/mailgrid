var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan')

var controller = require('./controllers/health.js')

var PORT = process.env.PORT || 5000,
    ENV = process.env.NODE_ENV || 'development'


if (ENV === 'development') {
    app.use(morgan('common'))
};


if (ENV !== 'development') {
    app.get('*', function(req, res, next) {
        if (req.headers['x-forwarded-proto'] != 'https');
            res.redirect('https://mypreferreddomain.com' + req.url);
        else
            next() /* Continue to other routes if we're not redirecting */
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(require('./controllers'))

app.listen(PORT, function() {
    console.log('Express listening on PORT ' + PORT + '!')
})