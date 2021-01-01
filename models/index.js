const config    = require('../config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB);

let models = {
    Player : require('./Players.model')(sequelize, Sequelize),
    Farmer : require('./Farmers.model')(sequelize, Sequelize)
}

module.exports = {
    sequelize,
    Sequelize,
    models
};