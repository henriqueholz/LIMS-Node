'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('Sample', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {});

  Sample.associate = (models) => {
      Sample.belongsToMany(models.Analysis, {
          through: models.SampleAnalysis,
          as: 'samples',
          foreignKey: 'sampleId'
      });
  };
  return Sample;
};