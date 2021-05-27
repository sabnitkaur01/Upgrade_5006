const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getHandTools(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT id, productName, productDescription, productCategory, productPrice, productImage, productVideo, productRating FROM products WHERE productCategory='Handtool' LIMIT ?,?", 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getHandTools
}