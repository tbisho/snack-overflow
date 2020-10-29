'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {

      models.comment.belongsTo(models.user)
      models.comment.belongsTo(models.snack)
    }
  };
  comment.init({
    userId: DataTypes.INTEGER,
    snackId: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};