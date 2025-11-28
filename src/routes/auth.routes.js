import express from 'express';
import { login } from '../controllers/auth.controllers.js';

const routes = express.Router();

// Esta ruta espera un POST con email y password en el body
routes.post("/login", login)

export default routes;
