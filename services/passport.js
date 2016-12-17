const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const twitterConfig = require('../config').twitterConfig;
const twitterStrategy = require('passport-twitter').Strategy;


/**
 * LOCAL STRATEGY
 */
const localLogin = new LocalStrategy(function(email, password, done) {
  User.findOne({ email: email}, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false) }
      return done(null, user);
    });
  });
});

/**
 * TWITTER STRATEGY
 */
const twitterLogin = new twitterStrategy({
  consumerSecret: twitterConfig.consumerSecret,
  consumerKey: twitterConfig.consumerKey,
  callbackURL: 'http://localhost:3090/auth'
}, (token, tokenSecret, profile, done) => {
  console.log('twitter done');
});

/**
 * WEB TOKEN
 */
//
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//   secretOrKey: config.secret
// };
//
// const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
//   User.findById(payload.sub, function(err, user) {
//     if (err) { return done(err, false); }
//     (user)
//       ? done(null, user)
//       : done(null, false);
//   })
// });
//
passport.use(localLogin);
passport.use(twitterLogin);

// passport.use(jwtLogin);
