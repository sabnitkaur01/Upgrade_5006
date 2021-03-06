const express = require('express');
const router = express.Router();
const products = require('../services/products');

/* GET products. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

// get specific product by id
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await products.getProductById(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while fetching product`, err.message);
    next(err);
  }
});

module.exports = router;