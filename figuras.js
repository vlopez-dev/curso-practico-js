// Codigo cuadrado

console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " .0cm");

const perimetroCuadrado = ladoCuadrado *4;

console.log("Los perimetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + " cm2");
console.groupEnd()

// Codigo Triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm" );
console.log("La altura del triangulo es:" + alturaTriangulo + "cm");


const permietroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro de triangulo es " + permietroTriangulo + "cm ");
const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El area del triangulo es " + areaTriangulo + "cm2 ");

console.groupEnd()


// Codigo Circulo
console.group("Circulo")

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es :" + radioCirculo + "cm")
//Diametro
const diametroCirculo= radioCirculo *2;
console.log("El diametro del circulo es :" + diametroCirculo + "cm")

//PI
const PI = Math.PI;

console.log("Pi es :" + PI );

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es :" + perimetroCirculo + "cm")


//Area

const areaCirculo = (radioCirculo * radioCirculo) *PI;
console.log("El area del circulo es :" + areaCirculo + "cm")

console.groupEnd()
