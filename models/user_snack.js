'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_snack extends Model {
    static associate(models) {
      
    }
  };
  user_snack.init({
    userId: DataTypes.INTEGER,
    snackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_snack',
  });
  return user_snack;
};