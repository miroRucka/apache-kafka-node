var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client),
    payloads = [
        {topic: 'topic1', messages: 'hi', partition: 0}
    ];


producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});

producer.on('error', function (err) {
    console.error(err);
})