'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teams = sequelize.define('Teams', {
    teamID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    teamName: DataTypes.STRING,
    teamAbbr: DataTypes.STRING,
    teamDesc: DataTypes.STRING,
    teamCoach: DataTypes.STRING,
    teamRank: DataTypes.INTEGER,
    teamPoints: DataTypes.INTEGER,
    teamPict: DataTypes.BLOB,
    teamLogo: DataTypes.BLOB,
  });

  Teams.associate = (models) => {
    Teams.belongsTo(models.Users, {foreignKey: 'teamCaptain', targetKey: 'userId'});
    Teams.belongsToMany(models.Leagues, {through: 'LeaguesTeams'});
    Teams.belongsToMany(models.Users, {through: 'UsersTeams'});
  }

  return Teams;
};