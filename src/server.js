import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
// import connection from './config/connectDB';


require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up view engine
configViewEngine(app)
// init all web routes
initWebRoutes(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})