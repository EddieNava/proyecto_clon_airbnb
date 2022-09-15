const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-cchbq85a4995s2ojckl0-a.oregon-postgres.render.com',
  username: 'clonairbnb_user',
  password: 'lZyWvBGXmP1NNXIDvz8vl1IdbxoeQFDh',
  database: 'clonairbnb',

});

module.exports = { db };