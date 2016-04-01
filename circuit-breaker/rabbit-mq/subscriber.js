// Note: subscriber.js is the reciever of the messages send to CloudAMPQ (RabbitMQ)
var amqp = require('amqplib/callback_api');
var config = require('../../.env/config.js');
var ENV = process.env.NODE_ENV || 'development';

if (ENV === "development") {
    var CLOUDAMQP_URL = config.url
} else {
    var CLOUDAMQP_URL = process.env.CLOUDAMQP_URL;
};

// if the connection is closed or fails to be established at all, a reconnect will happen
var amqpConn = null;

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
        amqpConn = conn;
        whenConnected();
    });
}





function whenConnected() {
  send();
  receive();
}


function send() {
    amqpConn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {
            durable: false
        });
        ch.sendToQueue(q, new Buffer('Hello World!'));
        console.log(" [x] Sent 'Hello World!'");
    });

};


function receive() {
    amqpConn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {
            durable: false
        });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
};



start();