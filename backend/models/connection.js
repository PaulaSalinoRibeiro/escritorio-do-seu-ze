const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'Offices_do_Seu_Ze' });

module.exports = connection;