// --------------Codigo Cuadrado--------

// ------Perimetro----
function perimetroCuadrado(lado){
    return lado *4;

}

// ---------Area-------
    function areaCuadrado(lado){
        return lado *lado
}



// -------------Codigo Triangulo-----------


// -------------Perimetro---------
function perimetroTriangulo(lado1,base,lado2) {
    return lado1 + lado2 + base;
}

// -------------Area---------

function areaTriangulo(base,altura) {
    return (base *altura) /2
    
}



// -------------Codigo Triangulo-----------

// -------------Radio---------

function diametroCirculo(radio) {

    return radio *2;
    
}


// -------------PI---------
const PI = Math.PI;


// -------------Perimetro---------
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// -------------Area---------

function areaCirculo(radio,PI) {
    return (radio * radio) *PI;
}

// -----------------Funciones cuadrado----------------------

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;
    perimetro = perimetroCuadrado(value)
    alert(perimetro);
}


function calcularAreaCuadrado(){
const input = document.getElementById("calcularArea");
const value = input.value;
area = areaCuadrado(value)
alert(area)
}
// -----------------------------------------


// Funciones para calcular figura Triangulo


function calcularPerimetroTriangulo() {
    const input = document.getElementById("calcularPerimetroTriangulo");
    const value = input.value;
    perimetro = perimetroTriangulo;
}