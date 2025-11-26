import { db } from "../data/data.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function obtenerProducto(id) {
  return new Promise(async (res, rej) => {
    try {
      console.log("obtenerProducto: buscando ID", id);
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      console.log("obtenerProducto: docSnap.exists()?", docSnap.exists());

      if (docSnap.exists()) {
        //console.log("Snap data:", docSnap);
        console.log("Document ID:", docSnap.id);
        console.log("Document data:", docSnap.data());
        res({...docSnap.data(), id: docSnap.id});
      } else {
        console.log("No such document!");
        res(null);
      }
    } catch (error) {
      console.log("Error en obtenerProducto:", error);
      rej(error);
    }
  });
}
//obtenerProducto(id)

function obtenerProductos() {
  return (
    new Promise(async (res, rej) => {
        try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productos.push({ ...doc.data(), id: doc.id });
        });
        console.log(productos);
        res(productos);
        } catch (error) {
        console.log(error);
        rej(error);
        }
    })
  );
}

function agregarProducto(producto) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "products"), producto);
      console.log("Producto agregado con ID: ", docRef.id);
      res({ ...producto, id: docRef.id });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

//agregarProducto({ nombre: "yerba", categoria: "infusion", precio: 200 });

function actualizarProducto(id, producto) {
  return new Promise(async (res, rej) => {
    try {
      await updateDoc(doc(db, "products", id), {
        ...producto
      });
      console.log("producto actualizado");
      res({ ...producto, id: id });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

//actualizarProducto({id: "xTF2S1gqdRhglLv79k3m", precio: 250})

function eliminarProducto(id) {
  return (
    new Promise(async (res, rej) => {
        try {
        await deleteDoc(doc(db, "products", id));
        console.log("Producto eliminado");
        res();
        } catch (error) {
        console.log(error);
        rej(error);
        }
    })
  );
}

//eliminarProducto("xTF2S1gqdRhglLv79k3m")

export {
  obtenerProducto,
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto,
};