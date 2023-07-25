import bcrypt from 'bcrypt';
import db from './database/db.js';
import localPassport from 'passport-local';
import passport from 'passport';
const localStrategy = localPassport.Strategy;

function userAuth(passport) {

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'passw'}, (email, password, done) => {
        db.Contact.findOne({where: {'email': email}}).then((contact) => {
            if(!contact) {
                return done(null, false)
            }
            const userId = contact.dataValues.userId;
            db.User.findByPk(userId).then((user) => {
                if(!user) {
                    return done(null, false)
                }
                bcrypt.compare(password, user.password, (err, success) => {
                    if(success) {
                        return done(null, user)
                    } else {
                        return done(err, false);
                    }
                });
            });
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        db.User.findByPk(id).then((user) => {
            done(null, user)
        }).catch((err) => {
            done(err, null)
        })
    })

}

export default userAuth(passport);