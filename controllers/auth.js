const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const passport = require('passport');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) });
}

exports.local = {
  signup: (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // basic validation
    if (!email || !password) {
      return res.status(422).send({ error: 'email and password are required'});
    }

    User.findOne({ email: email }, function(err, existingUser) {
      if (err) { return next(err); }

      // email is already taken
      if (existingUser) {
        return res.status(422).send({error:'email in use'});
      }

      // create and save
      const user = new User({
        email: email,
        password: password
      });

      user.save(function(err) {
        if (err) { return next(err); }
        console.log('done saving');

        res.json({ token: tokenForUser(user)});
      });
    });
  }
}

exports.twitter = {
  signup: (req, res, next) => {
    console.log('twitter signup');
    passport.authenticate('twitter');
  },
  signin: (req, res, next) => {
    console.log('authenticating');
    passport.authenticate('twitter');
  }
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  // basic validation
  if (!email || !password) {
    return res.status(422).send({ error: 'email and password are required'});
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // email is already taken
    if (existingUser) {
      return res.status(422).send({error:'email in use'});
    }

    // create and save
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      res.json({ token: tokenForUser(user)});
    });
  });
};
