const Device = require('../controllers/device')

module.exports = function(app) {
  
  app.post('/api/device/register', Device.register)
}