const connection = require('../config/database')
const { GetAllUsers, getUserById, updateUserById } = require('../services/CRUDService')
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
    res.send("Thanh cong")
    // const [results, fields] = await connection.query('Select * from Users u')
}

const postUpdateUser = async (req, res) => {
    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city

    let { email, name, city, userId } = req.body
    await updateUserById(email, city, name, userId)
    
    //res.send(" Cap Nhat Thanh cong")
    res.redirect('/')
}
const getCreatePage = (req,res) => {
    res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs', {userEdit : user})
}
module.exports = {
    getHomepage,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}