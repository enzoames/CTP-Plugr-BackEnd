'use strict';
module.exports = (sequelize, DataTypes) => {
  var Leagues = sequelize.define('Leagues', {
    league_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    organizer: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'user_id'
        }
    },
    league_name: DataTypes.STRING,
    league_est: DataTypes.DATE,
    league_desc: DataTypes.STRING,
    team_count: DataTypes.INTEGER,
    unique_rules: DataTypes.STRING,
    field_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    league_pict: DataTypes.BLOB,
    league_logo: DataTypes.BLOB
  });
  return Teams;
};