const express = require('express');

const db = require('./db');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'prod') {
  // 테이블 생성하기
  db.pool.query(
    `CREATE TABLE lists (
      id INTEGER AUTO_INCREMENT,
      value TEXT, 
      PRIMARY KEY (id)
    )`,
    (_err, results, fields) => {
      console.log('results', results);
      console.log('fields', fields);
    }
  );
}

app.get('/api/values', (_req, res) => {
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
      return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log(process.env.MYSQL_HOST);
  console.log(process.env.MYSQL_USER);
  console.log(process.env.MYSQL_ROOT_PASSWORD);
  console.log(process.env.MYSQL_DATABASE);
  console.log(process.env.MYSQL_PORT);
  console.log(process.env.NODE_ENV);

  console.log('server is running..');
});
