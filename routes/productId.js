const express = require('express');
const router = express.Router();
const products = require('../services/productId');

/* GET products. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getProductById(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;