const passport = require('passport');
const LocalPassport = require('passport-local');
const Users = require('./../models/Users');

const authenticateUser = (username, password, done) => {
    Users.findOne({
        email: username
    }).then(user => {
        if (!user) {
            return done(null, false);
        }

        if (!user.authenticate(password)) {
            return done(null, false);
        }

        return done(null, user);
    });
};

module.exports = () => {
    passport.use(new LocalPassport({
        usernameField: 'email',
        passwordField: 'password'
    }, authenticateUser));

    passport.serializeUser((user, done) => {
        if (!user) {
            return done(null, false);
        }

        return done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        Users.findById(id).then((user) => {
            if (!user) {
                return done(null, false)
            }

            return done(null, user);
        })
    })
};
