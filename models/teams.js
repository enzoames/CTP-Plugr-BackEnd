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
        //models.Teams.hasMany(models.Users);
        // associations can be defined here

      }
    }
  });

  Teams.associate = (models) => {
    models.Teams.belongsTo(models.Users, {as:'TeamCaptain', foreignKey: 'teamCaptain'});
  }

  return Teams;
};