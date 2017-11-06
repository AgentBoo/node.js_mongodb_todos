var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>
   res.send('Landed on todos index')
);

module.exports = router;
