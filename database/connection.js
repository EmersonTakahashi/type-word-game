require("dotenv").config();
const { Client } = require("pg");

const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_PORT = process.env.POSTGRES_PORT;

const client = new Client({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  port: POSTGRES_PORT,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
});

module.exports = client;
