const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT id,productName, productDescription, productCategory, productPrice, productImage, productVideo, productRating FROM products LIMIT ?,?", 
    [offset, config.listPerPage]
  );
  
  
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function getProductById(id, product){
  console.log(id);
  const rows = await db.query(
    `SELECT id, productName, productDescription, productCategory, productPrice, productImage, productVideo, productRating FROM products WHERE id= ?`, 
    [
       id
    ]
  );
  console.log(rows);

  const data = helper.emptyOrRows(rows);

  return {data};
}

module.exports = {
  getMultiple,
  getProductById
}