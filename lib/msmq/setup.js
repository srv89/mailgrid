var 
    amqp = require('amqplib/callback_api'),
    env = process.env.NODE_ENV || 'development',

    cloudAMPQConfig = require('./config').cloudAMPQConfig,
    subscriber = require('./subscriber'),
    publisher = require('./publisher');

var CLOUDAMQP_URL = null;

if (env === "development") {
    CLOUDAMQP_URL = require('../../.env/config').CLOUDAMPQ_URL;
} else {
    CLOUDAMQP_URL = process.env.CLOUDAMQP_URL;
};


// if the connection is closed or fails to be established at all, a reconnect will happen
//var amqpConn = null;

function start() {

    amqp.connect(CLOUDAMQP_URL + "?heartbeat=60", function(err, conn) {
        if (err) {
            console.error("[AMQP]", err.message);
            return setTimeout(start, 1000);
        }
        conn.on("error", function(err) {
            if (err.message !== "Connection closing") {
                console.error("[AMQP] conn error", err.message);
            }
        });
        conn.on("close", function() {
            console.error("[AMQP] reconnecting");
            return setTimeout(start, 1000);
        });
        console.log("[AMQP] connected");
        //amqpConn = conn;
        cloudAMPQConfig.amqpConn = conn
        whenConnected();
    });
}



function whenConnected() {
    //console.log(cloudAMPQConfig);
    subscriber.receive();
    publisher.send();
}

start();
