'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teams = sequelize.define('Teams', {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    league_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Leagues,
        key: 'league_id'
      },
    },
    team_captain: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: 'user_id'
      },
    },
    team_name: DataTypes.STRING,
    team_abbr: DataTypes.STRING,
    team_desc: DataTypes.STRING,
    team_coach: DataTypes.STRING,
    team_rank: DataTypes.INTEGER,
    team_points: DataTypes.INTEGER,
    team_pict: DataTypes.BLOB,
    team_logo: DataTypes.BLOB,
  });
  return Teams;
};