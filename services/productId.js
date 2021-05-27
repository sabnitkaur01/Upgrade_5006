const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getProductById(page = 1, id = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  console.log("id is" + id);
  const rows = await db.query(
    "SELECT id, productName, productDescription, productCategory, productPrice, productImage, productVideo, productRating FROM products WHERE id= 1  LIMIT ?,?", 
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
  getProductById
}