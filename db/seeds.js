const db = require('./index');
const faker = require('faker');

const QTY = 50;

for (let i = 0 ; i < 50 ; i ++) {

  const title = `${faker.hacker.adjective()} ${faker.hacker.noun()}`;
  const content = faker.hacker.phrase();
  const author = `${faker.name.firstName()} ${faker.name.lastName()}`;

  db.query(`
    INSERT INTO posts (title, content, author)
    VALUES ($<title>, $<content>, $<author>);
    `, { title, content, author }).then(() => {
      console.log(`Created ${title}`);
      if (i >= QTY -1) {
      process.exit();
    }
  });
}
