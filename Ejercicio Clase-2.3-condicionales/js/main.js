//operadores comparacion
/*const price = 235.6;
console.log(2 === '2');
console.log(price > 100);
console.log(price < 100);
console.log(2 !== '2');

//operadores logicos  &&, ||, !

const name = 'petra';

//enviar un mensaje de bienvenida siempre que el nombre  no sea anacleta

if (name !== 'anacleta') {
  console.log('Bienvenida ' + name);
}
//forma incorrecta
if (name === 'anacleta') {
  //debe haber algo
} else {
  console.log('Bienvenida ' + name);
}
*/
/* 

solicitar edad de un niño
 edad  <  5 --> debe ir a infantil
 edad >5 <11 --> debe ir a primaria
 edad >11--> debe ir a la ESO

 1.- Seleccionar los elementos del HTML y Crear las variables, input edad, input boton, h2
 2.- Escuchar un evento sobre el boton enviar
 3.- Recoger el valor de la edad, que introdujo el usuario
 4.- Realizar la comparacion  y renderizar en el HTML el mensaje que le corresponda
*/

const inputAge = document.querySelector('.js-age');
const btn = document.querySelector('.js-btn');
const message = document.querySelector('.js-msg');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  //parseInt --> convierte un string a numero
  const age = parseInt(inputAge.value);
  let msg;
  if (age <= 5) {
    msg = 'Escuela de infantil';
  } else if (age <= 11) {
    // age >5 && age < 11
    msg = 'Debe ir a primaria';
  } else if (age < 17) {
    msg = 'Debe ir a la ESO';
  } else {
    msg = 'Debes tener menos de 18 ';
  }
  message.innerHTML = msg;
});
