import {
    addProductService,
    deleteProductService,
    editProductService,
    getAllProductsService,
    getProductByIdService
} from '../services/products.services.js';

export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await addProductService(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto' });
    }
}

//ver si anda
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await deleteProductService(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(400).json({ message: 'ID del producto no proporcionado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
}

export const editProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        if (id && product) {
            const newProduct = await editProductService(id, product);
            res.status(200).json(newProduct);
        } else {
            res.status(400).json({ message: 'ID del producto o datos del producto no proporcionados' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al editar el producto' });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsService()
        //console.log("products en controller: ", products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Buscando producto con ID: ", id);
        if (id) {
            const product = await getProductByIdService(id)
            if (product) {
                console.log("Producto encontrado: en getProductById");
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } else {
            res.status(400).json({ message: 'ID del producto no proporcionado' });
        }
    } catch (error) {
        console.log("Error en getProductById: ", error);
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
};
