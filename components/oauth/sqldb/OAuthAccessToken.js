/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';


module.exports = function(sequelize, DataTypes) {
  const OAuthAccessToken = sequelize.define('oauth_access_tokens', {
    id: {
      type: DataTypes.INTEGER(14),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
      access_token:DataTypes.STRING(256),
      expires:DataTypes.DATE,
      scope: DataTypes.STRING,
      client_id:{
        type:DataTypes.INTEGER(14),
        references: {
            model: 'OAuthClient',
            key: 'id'
        }
      },
      user_id:{
          type:DataTypes.INTEGER(14),
          references: {
              model: 'User',
              key: 'id'
          }
      },
  }, {
    tableName: 'oauth_access_tokens',
    timestamps: false,
    underscored: true,
    // classMethods: {
    //   associate: function(models) {
    //     OAuthAccessToken.belongsTo(models.OAuthClient, {
    //       foreignKey: 'client_id',
    //     });
    //
    //     OAuthAccessToken.belongsTo(models.User, {
    //       foreignKey: 'user_id',
    //     });
    //   },
    // },
  });
    OAuthAccessToken.associate= function(models){
        OAuthAccessToken.belongsTo(models.OAuthClient, {
            foreignKey: 'client_id',
        });

        OAuthAccessToken.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
    }
  return OAuthAccessToken;
};
