var express = require('express')
  , router = express.Router()

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.
router.use("/api",router);
router.use(require('./users'));
router.get('/somepage', (req, res) => {
  res.send('somepage')
});

module.exports = router