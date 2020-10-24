'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_snack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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