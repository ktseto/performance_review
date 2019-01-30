const { commerce, date } = require('faker');
const db = require('./db');

const toSQLDate = dt => `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;

(async () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push([
      commerce.product(),
      Math.floor(Math.random() * 20),
      (Math.random() * 5).toFixed(1),
      toSQLDate(date.past()),
    ]);
  }

  const seedScript = `
    CREATE TABLE IF NOT EXISTS table1 (id SERIAL PRIMARY KEY, item VARCHAR(40) NOT NULL, quantity INT NOT NULL, rating DECIMAL, created_date TIMESTAMP NOT NULL)
  `;

  await db.query(data.reduce(
    (s1, s2) => `${s1};${`INSERT INTO table1(item, quantity, rating, created_date) VALUES ('${s2[0]}',${s2[1]},${s2[2]},'${s2[3]}')`}`,
    seedScript,
  ));
})();
