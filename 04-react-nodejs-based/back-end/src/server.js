const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(bodyParser.json());

app.get('/api/values', (req, res) => {
  db.pool.query('select id, value from lists', (err, results) => {
    if (err) {
      return res.status(500).end();
    }
    return res.json(results);
  });
});

app.post('/api/value', (req, res) => {
  db.pool.query(
    `insert into lists (value) values("${req.body.value}")`,
    // err, results, fields
    (err) => {
      if (err) {
        return res.status(500).end();
      }
      return res.json({success: true, value: req.body.value});
    }
  );
});

app.listen(5000, () => {
  console.log('server is running..');
});
