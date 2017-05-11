const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
})

// when this file will be required, it will return the object assigned to module.exports (i.e. the router object as seen here)
module.exports = router;
