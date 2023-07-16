import UserController from "../app/controllers/UserController.js";
import { Router } from "express";

const routes = Router();

routes.post('/users', UserController.store);

export default routes;