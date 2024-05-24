import {promises as fs} from "fs"; //importamos file system con Promesa

// importamos libreria uuid para generar id automatico (npm i uuid)
import {v4 as uuidv4} from "uuid";

// creamos una clase de javascript para utilizar una estructura basica (clase) para gestionar CRUD de los productos

// exportamos esta clase por que la vamos a usar en otro fichero
export class ProductManager{   //sintaxis de JS cuando creas clases

    constructor(){    //metodo para inicializar la clase(funcion)
                      //se ejecuta automaticamente, cada vez q se llame la clase
        this.path = "./src/products.json"   //this (para definir propiedades constructor)
                          //path para definir ruta
        this.products = []  // aca metemos los productos en el array de JSon
    }

    // agregamos los metodos para interactuar con los productos = CRUD
    // metodo = a metodo asincrono (mientras se ejecuta proceso, no corta los otros)
    /* metodos = asyn await */
    getProducts = async ()=>  {
        const response = await fs.readFile(this.path, "utf8")  //await (100pre luego async)
                                //this para leer el path
                                //utf parsea info json (2do argumento)
                                //read.fileSystem (sintaxis vieja)
        const responseJSON = JSON.parse(response) //instancia para formatear info a JSON
        return responseJSON
    };

    addProduct = async ({title})=> {  // creamos un producto que enviamos la propiedad titulo
        const id = uuidv4()           // generamos un id por cada producto q creamos (automatico)
        const newProduct = {id, title}    //creando nuevo producto con su titulo y almacenamos en "newProduct"
        // IMPORTANTE: traemos todos los productos existentes de product.json antes de pushear uno nuevo
        // los almacenamos en el this.product vacio []
        this.products = await this.getProducts()
        this.products.push(newProduct)

        await fs.writeFile(this.path, JSON.stringify(this.products))  //parseando a string la data de products

    }

} 

