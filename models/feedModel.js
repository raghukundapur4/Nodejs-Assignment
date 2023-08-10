module.exports = function(sequelize, DataTypes) {
    return sequelize.define('feed', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'feed',
    }, {
      instanceMethods: {
        countTasks: function() {
        }
      }
    });
  };