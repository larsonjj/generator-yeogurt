// Facebook Router

'use strict';

module.exports = function(app, passport) {
    app.get('/auth/google', passport.authenticate('google', {
        scope: 'profile email'
    }));
    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/login'
    }), function(req, res) {
        res.redirect(req.session.returnTo || '/');
    });
};