// Facebook Router

'use strict';

module.exports = function(app, passport) {
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_location']
    }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login'
    }), function(req, res) {
        res.redirect(req.session.returnTo || '/');
    });
};