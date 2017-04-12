var express = require('express')
  , router = express.Router()

// Car brands page
router.get('/users', (req, res)=> {
  res.send('get users ahahaha')
});

module.exports = router