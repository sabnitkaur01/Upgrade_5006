const express = require('express');
const router = express.Router();
const products = require('../services/handtools');

/* GET products. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getHandTools(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;