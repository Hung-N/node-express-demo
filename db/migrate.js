const db = require('./index');

db.query(`
  CREATE TABLE posts (
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  )
`)
  .then(() => {
  console.log('table successfully created');
  process.exit();
})
.catch(err => {
  console.error(err);
  process.exit();
});
