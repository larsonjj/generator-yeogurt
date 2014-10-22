'use strict';
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var UserModel = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
                isLowercase: true,
                notNull: true
            }
        },
        password: DataTypes.STRING,

        // Social login info
        facebook: DataTypes.STRING,
        facebookToken: DataTypes.STRING,

        twitter: DataTypes.STRING,
        twitterToken: DataTypes.STRING,
        twitterSecret: DataTypes.STRING,

        // Profile info
        name: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.STRING,
        },
        picture: {
            type: DataTypes.STRING,
        },

        resetPasswordToken: DataTypes.STRING,
        resetPasswordExpires: DataTypes.DATE
    }, {
        instanceMethods: {
            comparePassword: function(candidatePassword, cb) {
                bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
                    if (err) {
                        return cb(err);
                    }
                    cb(null, isMatch);
                });
            }
        }
    });

    return User;
};

module.exports = UserModel;
