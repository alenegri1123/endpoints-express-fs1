import { Router } from "express";
import { ProductManager } from "../productManager.js";

const productManager = new ProductManager(); // creo clase a partir de otra clase para ser manipulada
const productRouter = Router(); // traemos el objeto Router de express

// traemos todos los productos
productRouter.get('/', async(req, res)=> {   //callback para hacer solicitud de productos y traerlos 
    try {
        const products = await productManager.getProducts()   //accedemos a los metodos dentro de la clase declarado en variable
        return res.json(products)    //parseando la respuesta (llamo la variable) Reflejando en POSTMAN        
    } catch (error) {
        console.log("No es posible traer los productos")        
    }
});

productRouter.post('/', async(req, res)=> {
    try {
        const {title} = req.body;
        const response = await productManager.addProduct({title})
        res.status(200).json({message: "Producto almacenado exitosamente", data: response, title})
        
    } catch (error) {
        console.log( "El producto no pudo ser creado")
    }
})

export { productRouter }

