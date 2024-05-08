/* Se requiere construir un programa que simule un carrito de compras. Este programa
debe retornar: 
a) los productos disponibles (guardados en un objeto previamente. 
b) un mensaje donde avisa que se agregan los productos, detallando cuales. 
c) El detalle del carrito de compras con los productos agregados, el monto total de la compra. 
d) un saludo final. */

let productos = [
    leche = {
    nombreProducto: "Leche",
    precio: 4000,
    },
    chocolate = {
        nombreProducto: "Chocolate",
        precio: 5000,
    },
    arroz = {
            nombreProducto: "Arroz",
            precio: 2500,
    },
    helado = {
             nombreProducto: "Helado",
             precio: 15000,
    },
    jabon = {
            nombreProducto: "Jabón",
            precio: 10000,
    },
    queso = {
        nombreProducto: "Queso",
        precio: 10000,
    },
    papa = {
        nombreProducto: "Papa",
        precio: 1000,
    },
    atun = {
        nombreProducto: "Atún",
        precio: 6000,
    },
    galletas = {
        nombreProducto: "Galletas",
        precio: 6500,
    }
]


let continuar = true;

while (continuar) {
    console.log("------------------- Menú -------------------");
    console.log("                                            ");
    console.log("1. Mirar todos los productos disponibles    ");
    console.log("2. Agregar productos al carrito             ");
    console.log("3. Mirar el carrito                         ");
    console.log("4. Mirar el monto total de la compra        ");
    console.log("5. Salir del programa                       ");   

    let opcion = parseInt(prompt("Ingrese una opcion, digite unicamente un numero: "))

    switch (opcion) {
        case 1:
            console.log("Todos los productos disponibles del carrito de compra son: ");
            Object.entries(productos).forEach(([key, value]) => {
                console.log(key,": ", value)
            });
            break;
        
        case 2:
            let carrito = [];
            let userProduct = prompt("Ingresa el producto que desees:")

            if (userProduct = productos[nombreProducto] = "Leche"){
                console.log(carrito.push(userProduct))

            }


            break;
        
        case 3:
            
            break;

        case 4:
            
            break;

        case 5:
            continuar = false;
            console.log("¡Gracias por usar nuestro carrito de compras!");
            break;

        default:
            break;
    } 
}
