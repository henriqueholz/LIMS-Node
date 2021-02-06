'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    sample: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    analysis: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sampleresult: {
        type: DataTypes.BOOLEAN,
        allowNull: yes
    }
  }, {});

  Result.associate = (models) => {
  };
  return Result;
};