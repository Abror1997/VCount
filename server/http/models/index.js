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
  sequelize = new Sequelize('deklarant', 'postgres', '123456789', 
  {
    dialect: 'postgres'
  });
}

const models = {
  User: sequelize.import('./user'),
  
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models