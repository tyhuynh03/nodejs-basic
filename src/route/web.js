import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser)

    return app.use('/', router);
}

export default initWebRoutes;
