const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Profile extends Model {}
  
  Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        bio: {
            type: DataTypes.STRING,
            allowNull: false
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
        main_languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        to_learn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
         }
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'profile'
        }
      );
      
      module.exports = Profile;
      