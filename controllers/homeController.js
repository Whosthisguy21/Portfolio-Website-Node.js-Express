const getHome = (req, res) => {
    res.render("pages/home.ejs");
}

module.exports = {
    getHome
}