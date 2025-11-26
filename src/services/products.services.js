import {
  agregarProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerProducto,
  obtenerProductos
} from "../models/products.models.js";

export const addProductService = async (product) => {
  return(
    new Promise(async (res, rej) => { 
      try {
        const newProduct = await agregarProducto(product);
        res(newProduct);
      } catch (error) {
        rej(error);
      }
    })
  ) 
}

export const deleteProductService = async (id) => {
  return(
    new Promise(async (res, rej) => { 
      try {
        await eliminarProducto(id);
        res();
      } catch (error) {
        rej(error);
      }
    })
  )
}

export const editProductService = async (id, product) => {
  return(
    new Promise(async (res, rej) => { 
      try {
        const newProduct = await actualizarProducto(id, product);
        res(newProduct);
      } catch (error) {
        rej(error);
      }
    })
  )
}

export const getAllProductsService = async () => {
  return(
    new Promise(async(res, rej) => { 
      try {
        const productos = await obtenerProductos();
        res(productos);
      } catch (error) {
        rej(error);
      }
    })
  )
};

export const getProductByIdService = async (id) => {
  return (
    new Promise(async (res, rej) => {
      try {
        console.log("getProductByIdService: buscando", id);
        const product = await obtenerProducto(id);
        //console.log("getProductByIdService: producto encontrado", product);
        res(product);
      } catch (error) {
        console.log("getProductByIdService error:", error);
        rej(error);
      }
    })
  );
};
