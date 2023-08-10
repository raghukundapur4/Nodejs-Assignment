module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'user',
    }, {
      instanceMethods: {
        countTasks: function() {
        }
      }
    });
  };