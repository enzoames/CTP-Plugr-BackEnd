'use strict';
module.exports = (sequelize, DataTypes) => {
  var Leagues = sequelize.define('Leagues', {
    name: DataTypes.STRING,
    established: DataTypes.DATE,
    description: DataTypes.TEXT,
    teamCount: DataTypes.INTEGER,
    uniqueRules: DataTypes.TEXT,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    fieldAddress: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    leagueLogo: DataTypes.BLOB,
    leaguePhoto: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Leagues;
};