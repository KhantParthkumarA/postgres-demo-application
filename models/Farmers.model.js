let Farmer = (sequelize, Sequelize) => {
    sequelize.define('Farmers', {
        firstname : Sequelize.STRING,
        age       : Sequelize.STRING,
        type      : Sequelize.STRING
    });
}

module.exports = Farmer;