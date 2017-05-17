/**
function Ejercicio1 (){
  console.log("Hola que tal!?")
}

Ejercicio1 ()
Ejercicio1 ()
Ejercicio1 ()
Ejercicio1 ()
Ejercicio1 ()
Ejercicio1 ()

/*Lo que hay dentro del paréntesis es un atributo.
function log (a){
  console.log(a)
}

log("Me llamo Luna")
log("Me llamo Luna")
log("Me llamo Luna")

/*Se pueden poner varios atributos dentro del paréntesis.
function Sumando(a, b){
  var resultado1 = a + b
  console.log(resultado1)
}

Sumando(1, 2)
Sumando(2, 3)
Sumando(3, 4)
Sumando(4, 5)

/*Ejemplo
function fn1 (a){
  console.log(a)
}

function suma(a, b){
  return a + b
}

var resultadoSuma = suma(3, 4)
fn1(resultadoSuma)

/*Otro Ejemplo

function multiplicaPorTres (a){
  return a*3
}

function aplicaDosVeces (a, fn){
  return fn(fn(a))
}

var resultado = aplicaDosVeces(3, multiplicaPorTres)
console.log(resultado)

/*Probando function
function agregaIVA (valor){
  return valor / 0.81
}

var producto1 = agregaIVA(1200)
var producto2 = agregaIVA(990)
var producto3 = agregaIVA(5750)

console.log(producto1, producto2, producto3)


__________________________________________________________________________________________________________________*/

/*
Ejercicio:
- Crear una funcion IIFE, con 4 funciones dentro (suma, resta, multiplicación y división).
- Dentro de IIFE debe existir una variable que contenga el resultado de la operacion ejecutada.
- Con cada operacion se debe mostrar el resultado y, si la variale resultado se encuentra indefinida, 
  se debe esperar un segundo argumento para poder ejecutar cualquiera de las cuatro funciones
  al recibir el segundo dato. (El resultado se debe asignar a esta variable).
- Todas las operaciones siguientes se deben realizar contra la variable del resultado.
*/


var calculadora = (function () {
  var resultado

  return {
    suma: function(a, b) {
      if (resultado == undefined) {
        resultado = a + b
        return resultado
      }else {
        resultado = resultado + a
        return resultado
      }
    },
    resta: function(a, b) {
      if (resultado == undefined) {
        resultado = a - b
        return resultado
      }else {
        resultado = resultado - a
        return resultado
      }
    },
    multiplica: function(a, b) {
      if (resultado == undefined) {
        resultado = a * b
        return resultado
      }else {
        resultado = resultado * a
        return resultado
      }
    },
    divide: function(a, b) {
      if (resultado == undefined) {
        resultado = a / b
        return resultado
      }else {
        resultado = resultado / a
        return resultado
      }
    },
  }
})()

calculadora.multiplica(2, 3)
var x = calculadora.multiplica(2)