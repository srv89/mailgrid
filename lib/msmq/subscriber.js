/*
subscriber.js is the reciever of the messages send to CloudAMPQ (RabbitMQ)
*/
var amqp = require('amqplib/callback_api'),
    cloudAMPQConfig = require('./config').cloudAMPQConfig;

module.exports.receive = function receive() {
    var amqpConn = cloudAMPQConfig.amqpConn;
    
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
