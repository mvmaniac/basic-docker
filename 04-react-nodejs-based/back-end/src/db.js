const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: '1234',
  database: 'docker_db'
});

exports.pool = pool;
