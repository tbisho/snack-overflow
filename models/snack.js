'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class snack extends Model {
    static associate(models) {
      models.snack.belongsToMany(models.user,{through: "User_Snack"})
      models.snack.hasMany(models.comment)
    }
  };
  snack.init({
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'snack',
  });
  return snack;
};