var cloudAMPQConfig = {
    amqpConn: null,
    queues: [{
        name: 'cloudamqp-queue',
        subscribe: true,
        durable: true
    }],
    exchanges: [{
        name: "exchange",
        type: "direct",
        persistent: true,
        durable: true
    }],
    bindings: [{
        exchange: 'exchange',
        target: 'cloudamqp-queue',
        keys: ["routingKey"]
    }]
};

module.exports.cloudAMPQConfig = cloudAMPQConfig;