
const sequlize = require('../../models/sequlize');
const { sequelize, userModel, feedModel } = sequlize;

module.exports.saveUser = () => {
    const query = 'select * from users';
    return new Promise((resolve, reject) => {
        sequelize.transaction((t) => sequelize.query(query, {
          replacements: {
          },
          transaction: t,
        })
        .spread((result) => {
          if (result === null || result.length === 0) {
            resolve([]);
          } else {
            resolve(result);
          }
        }))
        .catch(error => {
          reject(error)
        })
    });
}