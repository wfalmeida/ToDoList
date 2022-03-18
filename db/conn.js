const {Sequelize} = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})


try {
    sequelize.authenticate()
    console.log('Conectamos ao MySQL')
} catch (err) {
    console.error('Não foi possivel conectar ao MySQL', err)
}

module.exports = sequelize