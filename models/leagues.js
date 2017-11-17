'use strict';
module.exports = (sequelize, DataTypes) => {
  var Leagues = sequelize.define('Leagues', {
    name: DataTypes.STRING,
    stablished: DataTypes.DATE,
    description: DataTypes.TEXT,
    teamCount: DataTypes.INTEGER,
    uniqueRules: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Leagues;
};