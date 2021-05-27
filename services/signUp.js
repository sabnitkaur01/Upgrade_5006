const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function createUser(user){
    const result = await db.query(
      `INSERT INTO users 
      (firstName, lastName, email, password) 
      VALUES 
      (?, ?, ?, ?)`, 
      [
        user.firstName, user.lastName,
         user.email,
         user.password
      ]
    );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'user created successfully';
    }
  
    return {message};
  }
  

module.exports = {
  createUser
}