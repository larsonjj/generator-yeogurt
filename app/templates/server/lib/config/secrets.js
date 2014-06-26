module.exports = {

    sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

    cookieSecret: process.env.COOKIE_SECRET || 'Your Cookie Secret goes here',

    mailgun: {
        login: process.env.MAILGUN_LOGIN || 'someUser',
        password: process.env.MAILGUN_PASSWORD || 'notagoodpassword'
    },

    mandrill: {
        login: process.env.MANDRILL_LOGIN || 'someUser',
        password: process.env.MANDRILL_PASSWORD || 'notagoodpassword'
    },

    sendgrid: {
        user: process.env.SENDGRID_USER || 'someUser',
        password: process.env.SENDGRID_PASSWORD || 'notagoodpassword'
    },

    facebook: {
        clientID: process.env.FACEBOOK_ID || '754220301289665',
        clientSecret: process.env.FACEBOOK_SECRET || '41860e58c256a3d7ad8267d3c1939a4a',
        callbackURL: '/auth/facebook/callback',
        passReqToCallback: true
    },

    twitter: {
        consumerKey: process.env.TWITTER_KEY || '6NNBDyJ2TavL407A3lWxPFKBI',
        consumerSecret: process.env.TWITTER_SECRET || 'ZHaYyK3DQCqv49Z9ofsYdqiUgeoICyh6uoBgFfu7OeYC7wTQKa',
        callbackURL: '/auth/twitter/callback',
        passReqToCallback: true
    },

    google: {
        clientID: process.env.GOOGLE_ID || '828110519058.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'JdZsIaWhUFIchmC1a_IZzOHb',
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    }

};