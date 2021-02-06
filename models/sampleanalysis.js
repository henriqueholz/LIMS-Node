'use strict';
module.exports = (sequelize, DataTypes) => {
  const SampleAnalysis = sequelize.define('SampleAnalysis', {
    sampleId: DataTypes.INTEGER,
    analysisId: DataTypes.INTEGER
    }, {});

  SampleAnalysis.associate = (models) => {
  };
  return SampleAnalysis;
};