// NOTE: Module dependencies ====================================================
const express = require('express');

// NOTE: Express router =========================================================
const router = express.Router();

// GET root
router.get('/', (req, res) =>
   res.send('Landed on todos index')
);

// NOTE: Export router
module.exports = router;
