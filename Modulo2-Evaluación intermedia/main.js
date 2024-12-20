// Quiero generar una página que incluya: un título descriptivo del juego, un desplegable para seleccionar opciones, un botón de jugar, un texto que vaya cambienado.

//Quiero generar una página que haga lo siguiente: que cuando la ususaria seleccione una opción y pinche el botón jugar se genere un número aleatorio del 1 al 9, que el servidor asocie el número aleatorio creado a una acción (piedra, papel o tijera), que el servidor compare la acción seleccionada por la usuaria con la generada aleatoriamente, que como resultado de la comparación pinte un texto u otro en la pantalla.


//PASOS
// 1. Crear el html. --Linkear el js (script)
// 2. Traer al js todos los elementos que voy a escuchar, modificar...---select, botón, texto
// 3.Escuchar el evento del click en el botón jugar, recoger datos y programar respuesta
//    -Crear un función que escuche el evento (addEventListener)
//    -Crear un función que maneje la respuesta (handleClick) -> recoger datos select, compararlos y pintar mensaje
//    -Crear un función que genere un número aleatorio (Math.random)
//    -Crear un función que asocie los números aleatorios con las acciones piedra, papel o tijera

'use strict';

const selectOptions = document.querySelector('.js-select');

const playButton = document.querySelector('.js-btn');

const message = document.querySelector('.js-text');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }  

// function numberToAction (){
//     if (getRandomNumber <= 3){
//         getRandomNumber = piedra
//     } else (getRandomNumber >= 7) {
//         getRandomNumber = papel
//     }
// }
   

function handleClick () {
    const selectValue = selectOptions.value;
    
    console.log (selectValue)
    
    const isRock = selectValue === 'rock';

    console.log (isRock)

    const isPaper = selectValue === 'paper';

    console.log (isPaper)

    const isScissors = selectValue === 'scissors';
    console.log(isScissors)

}

playButton.addEventListener('click', handleClick)