import './style.css';

console.log('Laboratorio Modulo 1');
console.log('---------------------');
// La forma más rápida sin utilizar variables sería la siguiente
console.log('El precio a pagar de cada uno de los amigos es de ' + (120 - 18) / 6 + ' euros');
console.log('---------------------');
// Utilizando variables
var precioTotal = 120;
console.log('El precio total de la cena es de ' + precioTotal + ' euros');
var precioBebidas = 18;
console.log('El precio de las bebidas es de ' + precioBebidas + ' euros');
var precioTotalAPagar = precioTotal - precioBebidas;
console.log('El precio a pagar entre todos los amigos es de ' + precioTotalAPagar + ' euros');
var numAmigos = 6;
console.log(
  'El precio a pagar de cada uno de los ' +
    numAmigos +
    ' amigos es de ' +
    precioTotalAPagar / numAmigos +
    ' euros'
);
console.log('---------------------');
