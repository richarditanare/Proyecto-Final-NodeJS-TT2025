import express from 'express';
import { 
    addProduct,
    deleteProduct,
    editProduct,
    getAllProducts, 
    getProductById 
} from '../controllers/products.controllers.js';

const routes = express.Router()

routes.get("/", getAllProducts)

routes.get("/:id", getProductById)

routes.post("/create", addProduct)

routes.delete("/:id", deleteProduct);

routes.put("/:id", editProduct);

export default routes;
