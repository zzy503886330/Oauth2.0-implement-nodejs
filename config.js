/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    host:'52.80.167.165',
      dialect: 'mysql',
    database: 'oauth_demo',
    username: 'testuser',
    password: 'testuser123!',
    logging: true,
    timezone: '+05:30',
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      },
  },
  mongo: {
    uri: 'mongodb://gloryque:intranet@192.168.0.200:27017/gloryque_quarc'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'sql' // mongo,sql if you want to use any SQL change dialect above in sql config
}