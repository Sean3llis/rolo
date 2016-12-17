const AuthController = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });
  /**
   * SIGNUP
   */
  app.post('/signup', AuthController.local.signup);
  app.post('/signup/twitter', AuthController.twitter.signup);
  /**
   * SIGNIN
   */
  app.post('/signin/twitter', AuthController.twitter.signin);
  app.get('/signin/twitter/callback', function() {
    passport.authenticate('twitter', {
      successRedirect: '/',
      failureRedirect: '/login'
    });
  });
  app.post('/signup', AuthController.signup);
};
