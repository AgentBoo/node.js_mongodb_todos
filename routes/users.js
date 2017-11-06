// NOTE: Module dependencies ====================================================
const express = require('express');

// NOTE: Express router =========================================================
const router = express.Router();

// GET /users
router.get('/', (req, res) =>
   res.send('Landed on users')
);

// NOTE: Export router
module.exports = router;
