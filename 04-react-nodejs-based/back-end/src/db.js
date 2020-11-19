const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: '1234',
  database: 'test'
});

export default pool;
