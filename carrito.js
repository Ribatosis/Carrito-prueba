/* Se requiere construir un programa que simule un carrito de compras. Este programa
debe retornar: 
a) los productos disponibles (guardados en un objeto previamente. 
b) un mensaje donde avisa que se agregan los productos, detallando cuales. 
c) El detalle del carrito de compras con los productos agregados, el monto total de la compra. 
d) un saludo final. */

const productos = {
    leche: 4000,
    chocolate: 5000,
    arroz: 2500,
    helado: 15000,
    jabon: 10000,
    queso: 10000,
    papa: 1000,
    atun: 6000,
    galletas: 6500,
}


/*menu
1. todos los productos disponibles
2. agregar productos , se muestra un alert para avisar productos que se han agregado
3. mirar el carritos
4. mirar el monto total de la compra*/
let carrito = [];
let continuar = true;
let total = 0;

while (continuar) {
    console.log("------------------- Menú -------------------");
    console.log("                                            ");
    console.log("1. Mirar todos los productos disponibles    ");
    console.log("2. Agregar productos al carrito             ");
    console.log("3. Mirar el carrito                         ");
    console.log("4. Mirar el monto total de la compra        ");
    console.log("5. Salir del programa                       ");   

    let opcion = parseInt(prompt("Ingrese una opcion, digite unicamente un numero: "));

    switch (opcion) {
        case 1:
            console.log("Todos los productos disponibles para hacer la compra son: ");
            Object.entries(productos).forEach(([key, value]) => {
                console.log(`${key} ${value}`)
            });
            break;
        
        case 2:
            let userProduct = prompt("Ingrese el producto que desea añadir: ");
        
            userProduct.toLowerCase();
            carrito.push(userProduct);
            total += productos[userProduct]
        
            break;
        
        case 3:
            console.log("El producto ha sido agregado al carrito: " + carrito);
            break;

        case 4:
            console.log(`El total de su compra es: ${total}`);
            break;

        case 5:
            continuar = false;
            console.log("¡Gracias por usar nuestro carrito de compras!");
            break;

        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida del menú.");
            break;
    } 
}
