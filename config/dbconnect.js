const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.MYSQL_OP_DB_NAME, process.env.MYSQL_OP_USERNAME, process.env.MYSQL_OP_PASSWORD, {
  host: process.env.MYSQL_DB_SERVER,
  dialect: 'mysql',
  logging: false
})

try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.')
  sequelize.sync()
  console.log('All models synchronized successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error.message)
}

module.exports = sequelize