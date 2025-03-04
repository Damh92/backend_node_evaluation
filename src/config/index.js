const {mongoClient, ObjectId } = require ('mongodb');
const {config } = require('../config');

const USER =encodeURIComponent(config.dbuser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;



require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  dbHost: process.env.MONGO_HOST,
  dbName: process.env.MONGO_DB_NAME,
  dbPort: process.env.MONGO_PORT,
  dbConnection: process.env.MONGO_CONNECTION,
};

module.exports = { config };


//mongosh "mongodb+srv://cluster0.gkkud.mongodb.net/myFirstDatabase" --username damh92