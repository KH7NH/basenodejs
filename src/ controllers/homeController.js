const getHomepage = (req, res) => {
    // process data
    //call models
    res.send('Home page')
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getHoidanit
}