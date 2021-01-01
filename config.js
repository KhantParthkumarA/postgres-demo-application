require('dotenv').config();

module.exports = {
    DB   : process.env.DATABASE_URL,
    HOST : process.env.NODE_ENV === 'development' ? 'localhost' : process.env.DB_HOST,
    PORT : process.env.NODE_ENV === 'development' ? '8080' : process.env.PORT,
    ENV  : process.env.NODE_ENV
}