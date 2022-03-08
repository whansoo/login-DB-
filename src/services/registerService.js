import connection from "../configs/connectDB"
let createNewUser = (user) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query( "INSERT INTO users set?", user, function(error, rows) {
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