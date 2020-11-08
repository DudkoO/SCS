const dotenv = require('dotenv');
dotenv.config();

const { MYSQL_USER, MYSQL_PASS, MYSQL_DB_NAME, MYSQL_HOST } = process.env;

const configForRemoteServer = {
    'use_env_variable': 'MYSQL_CONNECTION_STRING'
};

module.exports = {
   // 'development': configForRemoteServer,
    'production': configForRemoteServer,
    'development': {
        'username': MYSQL_USER,
        'password': MYSQL_PASS,
        'database': MYSQL_DB_NAME,
        'host': MYSQL_HOST,
        'dialect': 'mysql'
    }
};
