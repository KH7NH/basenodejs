const connection = require('../config/database')
const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = (req, res) => {
    res.send('create a new user succeed!')
    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city

    let {email, name, city} = req.body

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUE (?, ?, ?)`,
        [email, name, city]
    )
}
module.exports = {
    getHomepage,
    getHoidanit,
    postCreateUser
}