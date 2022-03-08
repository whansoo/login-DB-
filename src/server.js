require('dotenv').config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";


let app = express();

app.use(cookieParser("secret"));

//config session
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //1day
    }
}));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Config view engine
configViewEngine(app);

//config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () =>console.log(`서버구동 ${port}!`));
