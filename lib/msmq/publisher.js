/*
publisher.js is the sender of the messages. It send the messages to CloudAMPQ (RabbitMQ), that are consumed by the subscriber.js
*/
var amqp = require('amqplib/callback_api'),
    cloudAMPQConfig = require('./config').cloudAMPQConfig;

module.exports.send = function send() {
    var amqpConn = cloudAMPQConfig.amqpConn;
    
    amqpConn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {
            durable: false
        });
        ch.sendToQueue(q, new Buffer('Hello World!'));
        console.log(" [x] Sent 'Hello World!'");
    });

};
