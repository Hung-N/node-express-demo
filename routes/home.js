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
  const params = req.body
  // cookies are stored in the browser.
  // to create a cookie we must tell the browser in our response to add a cookie of given name with given values
  // 👇🏻  would add ...
  res.cookie('fullName', params.fullName);


  // you can store arrays and objects in cookies.  However they are serialized (transformed) into strings by the cookie-parser, then it parses it back into the original javascript data for your usage.
  res.cookie('things', ['power supply', 'pile of crap', 'kitchen sink']);
  res.render('contact', params);
})

// when this file will be required, it will return the object assigned to module.exports (i.e. the router object as seen here)
module.exports = router;
