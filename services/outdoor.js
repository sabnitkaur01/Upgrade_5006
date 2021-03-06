const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getOutdoorTools(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT id, productName, productDescription, productCategory, productPrice, productImage, productVideo, productRating FROM products WHERE productCategory='Outdoor' LIMIT ?,?", 
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
  getOutdoorTools
}