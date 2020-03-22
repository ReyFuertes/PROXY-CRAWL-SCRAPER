const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

var pg = require('pg');
pg.defaults.ssl = true;

const { Sequelize, Op } = require('sequelize');
module.exports = new Sequelize('defaultdb', 'doadmin', 'yb1b695dpo68dc7j', {
  host: 'db-postgresql-sgp1-36888-do-user-7167088-0.a.db.ondigitalocean.com',
  dialect: 'postgres',
  port: 25060,
  schema: 'ildb',
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true
  },
  operatorsAliases: {
    $gt: Op.gt,
    $eq: Op.eq
  }
  //timezone: '+08:00' //for writing to database
})