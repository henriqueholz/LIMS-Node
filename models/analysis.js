'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analysis = sequelize.define('Analysis', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lowRange: {
        type: DataTypes.INTEGER
    },
    highRange: {
        type: DataTypes.INTEGER
    }
  }, {});

  Sample.associate = (models) => {
      Sample.belongsToMany(models.Sample, {
          through: models.SampleAnalysis,
          as: 'analysis',
          foreignKey: 'analysisId'
      });
  };
  return Analysis;
};