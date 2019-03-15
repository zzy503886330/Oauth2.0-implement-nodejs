/**
 * Created by Manjesh on 14-05-2016.
 */

/** https://github.com/dsquier/oauth2-server-php-mysql **/
var config = require('./../../../config')
var Sequelize = require('sequelize')
console.log(config.sql.password)
var db = {
  sequelize: new Sequelize(config.sql.database,config.sql.username,config.sql.password, {
      host: config.sql.host,
      dialect: config.sql.dialect,
      pool: config.sql.pool
  })
};
db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
db.OAuthAccessToken = db.sequelize.import('./OAuthAccessToken');
db.OAuthAuthorizationCode = db.sequelize.import('./OAuthAuthorizationCode');
db.OAuthClient = db.sequelize.import('./OAuthClient');
db.OAuthRefreshToken = db.sequelize.import('./OAuthRefreshToken');
db.OAuthScope = db.sequelize.import('./OAuthScope');
db.User = db.sequelize.import('./User');
db.Thing = db.sequelize.import('./Thing');
db.OAuthAccessToken.belongsTo(db.User, {foreignKey: 'user_id'})
db.OAuthAccessToken.belongsTo(db.OAuthClient, {foreignKey: 'client_id'})
db.OAuthAuthorizationCode.belongsTo(db.User, {foreignKey: 'user_id'})
db.OAuthAuthorizationCode.belongsTo(db.OAuthClient, {foreignKey: 'client_id'})
db.OAuthClient.belongsTo(db.User, {foreignKey: 'user_id'})
db.OAuthRefreshToken.belongsTo(db.User, {foreignKey: 'user_id'})
db.OAuthRefreshToken.belongsTo(db.OAuthClient, {foreignKey: 'client_id'})
// Object.keys(db).forEach(function(modelName) {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;