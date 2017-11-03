'use strict';
module.exports = (sequelize, DataTypes) => {
  var Leagues = sequelize.define('Leagues', {
    leagueId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    leagueName: DataTypes.STRING,
    leagueEst: DataTypes.DATE,
    leagueDesc: DataTypes.STRING,
    teamCount: DataTypes.INTEGER,
    uniqueRules: DataTypes.STRING,
    fieldAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    leaguePict: DataTypes.BLOB,
    leagueLogo: DataTypes.BLOB
  });

  Leagues.associate = (models) => {
      Leagues.belongsTo(models.Users, {foreignKey: 'organizer', targetKey: 'userId'});
      Leagues.belongsToMany(models.Teams, {through: 'LeaguesTeams'});
  }
  
  return Leagues;
};