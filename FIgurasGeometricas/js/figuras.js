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

function Isosceles(ladoa,ladob) {
    console.log(ladoa,ladob)
    return (Math.sqrt(Math.pow(ladoa,2)- Math.pow((ladob/2),2)))
}



// -------------Perimetro---------
function perimetroTriangulo(lado1,base,lado2) {
    return (lado1 + lado2 + base);
}

// -------------Area---------

function areaTriangulo(base,altura) {
    return (base *altura) /2
    
}



// -------------Codigo Circulo-----------

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
    const inputlado1 = document.getElementById("InputTrianguloLado1");
    const inputlado2 = document.getElementById("InputTrianguloLado2");
    const inputladobase = document.getElementById("InputTrianguloLadobase");

    const valuelado1 = parseInt(inputlado1.value);
    const valuelado2 = parseInt(inputlado2.value);
    const  valueladobase = parseInt( inputladobase.value);
    perimetro= perimetroTriangulo(valuelado1,valuelado2,valueladobase);
    alert(perimetro);

}

function CalcularareaTriangulo() {
 const inputAltura = document.getElementById("InputAltura")
 const inputBase = document.getElementById("InputBase")

 const base = parseInt(inputBase.value);
 const altura = parseInt(inputAltura.value)
    area = areaTriangulo(base,altura)
    alert(area)
}
// -------------------------------Circulo------------------------------------

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("InputRadio")

    const radio = parseInt(inputRadio.value);
    diametro = diametroCirculo(radio)
    alert(" El diametro es " + diametro)
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadio")

    const radio = parseInt(inputRadio.value);
    perimetro = perimetroCirculo(radio)
    alert(" El perimetro es " + perimetro)
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadio")

    const radio = parseInt(inputRadio.value);
    area = diametroCirculo(radio)
    alert(" El area es " + area)
}

function CalcularAlturaIsosceles() {
    const inputladoa = document.getElementById("InputTrianguloLadoa");
    const inputladob = document.getElementById("InputTrianguloLadob");
    const ladoa = parseInt(inputladoa.value);
    const ladob = parseInt(inputladob.value)
    
    altura = Isosceles(ladoa,ladob)
    alert(altura)



}