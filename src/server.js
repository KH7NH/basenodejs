const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'ejs') 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})