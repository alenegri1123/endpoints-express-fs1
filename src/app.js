import express from "express";
import { ProductManager } from "./productManager.js"; //import con express especificar formato (no usado, ahora usamos ROUTER de abajo)
import { productRouter } from "./router/products.router.js";
// respecto a funciones y clases

const PORT = 3005;
const app = express();
app.use(express.json());  //middleware 

app.use('/api/products', productRouter); //usamos middleware para crear endpoint como primer argumento y 2do argumento usamos el router donde tenemos almacenado todo el CRUD




app.listen(PORT, ()=> {
    console.log(`servidor conectado al Puerto ${PORT}`)
})


