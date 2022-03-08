require('dotenv').config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser"


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () =>console.log(`서버구동 ${port}!`));
