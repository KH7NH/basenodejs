const connection = require("../config/database")

const GetAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}
module.exports = {
    GetAllUsers
}