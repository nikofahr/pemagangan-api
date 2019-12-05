const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'dgfnzqxtqnsfwd',
  host: 'ec2-23-21-94-99.compute-1.amazonaws.com',
  database: 'dcrja60iad691q',
  password: '2516e081188fcf458bb45f6608bada4f517dd9aff4eeb6eb8edd1a4776c21d24',
  port: 5432
});

module.exports = pool;
