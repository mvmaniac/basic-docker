const express = require('express');
const redis = require('redis');

const PORT = 8080;

const app = express();
const client = redis.createClient({
  host: '192.168.0.67',
  port: '6379'
});

client.set('number', 0);

app.get('/', (req, res) => {
  client.get('number', (err, number) => {
    client.set('number', parseInt(number, 10) + 1);

    res.send(`숫자가 1씩 올라갑니다. 숫자 ${number}`);
  });
});

app.listen(PORT);
console.log('server is running...');
