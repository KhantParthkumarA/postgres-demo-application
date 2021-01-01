let Player = (sequelize, Sequelize) => {
    return sequelize.define('Players', {
        firstname : Sequelize.STRING,
        lastname  : Sequelize.STRING
    });
}

module.exports = Player;