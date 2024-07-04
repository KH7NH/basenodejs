require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)
// khai bao route
app.use('/', webRoutes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})