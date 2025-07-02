/* eslint-disable no-undef */
const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host:
    process.env.NODE_ENV === "production"
      ? process.env.DB_HOST
      : process.env.DB_HOST_DEV,
  user:
    process.env.NODE_ENV === "production"
      ? process.env.DB_USERNAME
      : process.env.DB_USERNAME_DEV,
  password:
    process.env.NODE_ENV === "production"
      ? process.env.DB_PASSWORD
      : process.env.DB_PASSWORD_DEV,
  database:
    process.env.NODE_ENV === "production"
      ? process.env.DB_NAME
      : process.env.DB_NAME_DEV,
  port:
    process.env.NODE_ENV === "production"
      ? process.env.DB_PORT
      : process.env.DB_PORT_DEV,
});

module.exports = pool.promise();
