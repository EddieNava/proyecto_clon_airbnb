const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '11606842',
  database: 'airbnb',

});

module.exports = { db };