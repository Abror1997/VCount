const Sequelize = require('sequelize')

let sequelize = null
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
    host: "deklarant.herokuapp.com"
  });
} else {
  sequelize = new Sequelize('vcount', 'postgres', '123456789',  {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  })
}

const models = {
  User: sequelize.import('./user'),
  Company: sequelize.import('./company'),
  Device: sequelize.import('./device')
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models