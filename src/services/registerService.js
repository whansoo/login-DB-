import connection from "../configs/connectDB"
import bcrypt from "bcryptjs";

let createNewUser = (user) => {
    return new Promise((resolve, reject) => {
        try {

           //hash user's password
           let salt =  bcrypt.genSaltSync(10);
           let data = {
               fullname: user.fullname,
               email: user.email,
               password: bcrypt.hashSync(user.password, salt)
           };


           //create a new user
            connection.query( "INSERT INTO users set?", data, function(error, rows) {
                if(error) reject(error);
                resolve("create a new user successfully");
            })
        } catch (e) {
            reject(e);
        }
    });

};

module.exports = {
    createNewUser: createNewUser
}