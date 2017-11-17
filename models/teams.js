'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teams = sequelize.define('Teams', {
    teamName: DataTypes.STRING,
    teamAbbr: DataTypes.STRING,
    description: DataTypes.TEXT,
    teamCoach: DataTypes.STRING,
    teamRank: DataTypes.INTEGER,
    teamPoints: DataTypes.INTEGER,
    teamPicture: DataTypes.BLOB,
    teamLogo: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teams;
};