const express = require('express');
const router = express.Router();
const db = require('../db')


// URL: /posts VERB: GET action: READ
router.get('/', (req, res) => {

  db.query(`SELECT * FROM posts ORDER BY id DESC`).then(posts => {
    // res.send(posts);
    res.render('posts/index', {posts});
  })
})


router.get('/:id', (req, res) => {
  const {id} = req.params;

  db.one(`SELECT * FROM posts WHERE id=$<id> LIMIT 1`, {id})
    .then(post => {
      res.render('posts/show', {post})
    })
});







module.exports = router;
