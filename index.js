require('dotenv').config()

const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

const taskRoutes = require('./routes/taskRoutes')

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.use('/tasks', taskRoutes)

conn
.sync()
.then(
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Servidor inicializado em http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/tasks`)
    })
)
.catch((err) => {
    console.error(err)
})
