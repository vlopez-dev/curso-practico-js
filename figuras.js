// Codigo cuadrado


//Perimetro
function perimetroCuadrado(lado){
    return lado *4;

}

//Area

    function areaCuadrado(lado){
        return lado *lado
}



// Codigo Triangulo

//Perimetro
function perimetroTriangulo(lado1,base,lado2) {
    return lado1 + lado2 + base;
}

//Area

function areaTriangulo(base,altura) {
    return (base *altura) /2
    
}



// Codigo Circulo

//Radio

function diametroCirculo(radio) {

    return radio *2;
    
}


//PI
const PI = Math.PI;


//Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Area

function areaCirculo(radio,PI) {
    return (radio * raduio) *PI;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById(InputCuadrado);
    const value= input.value;
    perimetro = perimetroCuadrado(value)
    alert(perimetro);
}
function calcularArea(){

}
