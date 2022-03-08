import connection from "../configs/connectDB";
import bcrypt from "bcryptjs";

let createNewUser = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkEmailUser(user.email);
            if(check === false) {
                //hash user's password
                let salt = bcrypt.genSaltSync(10);
                let data = {
                    fullname: user.fullname,
                    email: user.email,
                    password: bcrypt.hashSync(user.password, salt)
                };

                //create a new user
                connection.query("INSERT INTO users set ? ", data, function(error, rows) {
                    if (error) reject(error);
                    resolve("create a new user successfully");
                })
            }
            if(check === true)
                reject(`${user.email}은 이미 사용중 입니다 다른 이메일을 사용 하십시오.`)

        } catch (e) {
            reject(e);
        }
    });
};

let checkEmailUser = (email) => {
return new Promise((resolve, reject) => {
    try{
        connection.query("SELECT * from users where email = ?", email, function(error, rows) {
            if(error) reject(error);
            if(rows.length > 0) resolve(true);
            resolve(false);
        })
    }catch (e) {
        reject(e);
    }
}) ;
};

module.exports = {
    createNewUser: createNewUser
};