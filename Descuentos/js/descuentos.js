// const precioOriginal = 100;
// const descuento = 15;
const porcentajePrecioConDescuento = 100 - descuento;



function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });