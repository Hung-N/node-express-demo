const express = require('express');

const router = express.Router();



//URL: http:localhost:4545/ VERB: get
router.get('/', (req, res) => {
  res.render('index');
})


//URL: http:localhost:4545/contact VERB: get
router.get('/contact', (req, res) => {
  res.render('contact', {fullName: '', email: '', comment: ''});
})

router.post('/contact', (req,res) => {
  const param = req.body
  res.render('contact', param);
})

// when this file will be required, it will return the object assigned to module.exports (i.e. the router object as seen here)
module.exports = router;
