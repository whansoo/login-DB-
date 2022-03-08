

let getRegisterPage = (req, res) => {
    return res.render("register.ejs");
};


module.exports = {
    getRegisterPage: getRegisterPage
};