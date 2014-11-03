'use strict';
var bcrypt = require('bcrypt-nodejs');

var UserModel = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isLowercase: true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
            validate: {
                isLowercase: true
            }
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
        password: DataTypes.STRING,

        // Social login info
        facebook: DataTypes.STRING,
        facebookToken: DataTypes.STRING,

        twitter: DataTypes.STRING,
        twitterToken: DataTypes.STRING,
        twitterSecret: DataTypes.STRING,

        // Profile info
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.STRING,
        },
        picture: {
            type: DataTypes.STRING
        },

        resetPasswordToken: DataTypes.STRING,
        resetPasswordExpires: DataTypes.DATE
    }, {
        instanceMethods: {
            comparePassword: function(candidatePassword, done) {
                bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
                    if (err) {
                        return done(err);
                    }
                    done(null, isMatch);
                });
            }
        }
    });

    User.hook('beforeValidate', function(user, done) {

        // Check to see if password has changed
        if (!user.changed('password')) {
            return done(null, user);
        }

        // Salt password
        bcrypt.genSalt(5, function(err, salt) {
            if (err) {
              return done(err);
            }

            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if (err) {
                  return done(err);
                }
                user.password = hash;
                return done(null, user);
            });
        });
    });

    return User;
};

module.exports = UserModel;
