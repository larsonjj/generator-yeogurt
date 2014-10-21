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
        classMethods: {
            saltPassword: function() {
                bcrypt.genSalt(5, function(err, salt) {
                    if (err) {
                      return console.log(err);
                    }

                    bcrypt.hash(this.getDataValue('password'), salt, null, function(err, hash) {
                        if (err) {
                          return console.log(err);
                        }
                        this.setDataValue('password', hash);
                    });
                });
            },
            comparePassword: function(candidatePassword, cb) {
                bcrypt.compare(candidatePassword, this.getDataValue('password'), function(err, isMatch) {
                    if (err) {
                        return cb(err);
                    }
                    cb(null, isMatch);
                });
            },
            gravatar: function(size) {
                if (!size) {
                  size = 200; // Set default size to 200x200px
                }

                if (!this.getDataValue('email')) {
                    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
                }

                var md5 = crypto.createHash('md5').update(this.getDataValue('email')).digest('hex');
                return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
            }
        }
    });

    return User;
};

module.exports = UserModel;
