const mysql = require("mysql2");
const config = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

module.exports = connection;