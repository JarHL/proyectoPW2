//practica: carrito de compras
/* crear app que permita ir agregando elementos 
a un carrito de compras con uso de arreglos */

const compras =[];

let seguirComprado=true;

while (seguirComprado == true) {
    let preguntar =prompt("ingrese una fruta a comprar"); 
    compras.push(preguntar);
    console.log(compras);

    let confirmacion = confirm("¿seguir comprando?");
    if (confirmacion) {
        seguirComprado=true;
    }else{
        seguirComprado = false;
    }
}

//console.log("for");
for (const elemento of compras) {
    console.log(elemento);
}