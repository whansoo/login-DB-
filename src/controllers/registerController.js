let getRegisterPage = (req, res) => {
    return res.render("register.ejs");
};

let createNewUser = (req, res) => {
 console.log(req.body);
 try{
     let data = {
         fullname: req.body.fullname,
         email: req.body.email,
         password: req.body.password
     }
     return res.staus(200).json({
         message: "a user creat succeeds"
     })

 } catch (e) {
     return res.staus(500).json(e);
 }

};

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};