// const precioOriginal = 100;
// const descuento = 15;
const porcentajePrecioConDescuento = 100 ;



function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function ButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.nodeValue;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue = inputDiscount.nodeValue;
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

     const resultP = document.getElementById("ResultPrice");

     resultP.innerText = "El precio con descuento son: $" + precioConDescuento
    
}