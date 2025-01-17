require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const connection = require('./config/database')

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// config template engine
configViewEngine(app)
// khai bao route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})