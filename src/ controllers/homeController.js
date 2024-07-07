const connection = require('../config/database')
const { GetAllUsers } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results = await GetAllUsers()
    return res.render('home.ejs', {listUsers: results})
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city

    let {email, name, city} = req.body

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)VALUE (?, ?, ?)`,[email, name, city]
    )
    res.send('create a new user succeed!')
    // const [results, fields] = await connection.query('Select * from Users u')
}
const getCreatePage = (req,res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage,
    getHoidanit,
    postCreateUser,
    getCreatePage
}