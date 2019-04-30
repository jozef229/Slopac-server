require('dotenv').load();

module.exports = require( 'knex' )( {

    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        charset: process.env.DB_CHARSET,
    }
} );
