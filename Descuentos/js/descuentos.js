// const precioOriginal = 100;
// const descuento = 15;
const porcentajePrecioConDescuento = 100 ;



function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *porcentajePrecioConDescuento)/100;
    const select = document.querySelector("#cupones");
   
    switch (select.value) {
        case "Dia del padre":
            var descuentocupon= 10;
            precioDescuentomascupon=precioConDescuento-descuentocupon
            return precioDescuentomascupon

            case "Dia del abuelo":
            var descuentocupon= 20;
            precioDescuentomascupon=precioConDescuento-descuentocupon
            return precioDescuentomascupon

            case "Dia del niño":
            var descuentocupon= 50;
            precioDescuentomascupon=precioConDescuento-descuentocupon
            return precioDescuentomascupon
        default:
            break;
    }

    return precioConDescuento ;
}

function ButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    const resultP = document.getElementById("ResultPrice");
    

     resultP.innerText = "El precio con descuento son: $" + precioConDescuento
    
}



function cargarCupones(){
    const cupones = ["Dia del padre", "Dia del niño", "Dia del abuelo"];

        for (let index = 0; index < cupones.length; index++) {
            var element = cupones[index];
            document.getElementById("cupones").innerHTML += "<option value='"+cupones[index]+"'>"+cupones[index]+"</option>"; 

        }
        
            
}

