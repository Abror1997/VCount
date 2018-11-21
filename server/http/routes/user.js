

module.exports = function(app) {
  const User = require('../controllers/user')

  app.post('/api/user/register', User.register),
  app.post('/api/user/login', User.login),
  app.get('/api/user/get', User.get)
}