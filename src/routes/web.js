import express from "express";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import initPassportLocal from "../controllers/passportLocalController";


initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res)=>{
        return res.render("homepage.ejs")
    });

    router.get("/register", registerController.getRegisterPage );
    router.post("/register-new-user", registerController.createNewUser );
   
    
    router.get("/login", loginController.getLoginPage );
    router.post("/login", loginController.handleLogin );

    return app.use("/", router);
};
module.exports = initWebRoutes;
