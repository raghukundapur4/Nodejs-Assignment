var dbConfig = require('../config/dbConfig');


var Sequelize = require("sequelize");
  const sequelize = new Sequelize(
    dbConfig.db_database,
    dbConfig.db_username,
    dbConfig.db_password,
    {
      dialect: "mysql",
      port: dbConfig.db_port,
      host: dbConfig.host,
      pool: { idle: 30000, min: 0, max: 100 },
      dialectOptions: {
        multipleStatements: true,
      },
    }
  );

sequelize.authenticate().then(
  function () {
    logger.info("Connection has been established to Master Database successfully.");
  },
  function (err) {
    logger.info("Unable to connect to the Master Database:", err);
  }
);

// load models
var models = [
    'userModel',
    'feedModel'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});


module.exports.sequelize = sequelize;

