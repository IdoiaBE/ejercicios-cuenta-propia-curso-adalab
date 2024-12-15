/*
sintaxis:
definicion:
    function nombre_de_la_funcion(){
        instrucciones --> condicionales, crear var, innerHTML, eventos
    }
ejecutarla:
    nombre_de_la_funcion()

Pasos obligatorio
    1.- Crearla o definirla
    2.- LLamarla/ejecutarla

opcional
    - parametros

EL numero de parámetros debe ser igual tanto en la  definición como ejecución

*/

function sayHello(adalaber) {
  console.log(`hola ${adalaber}`);
}

sayHello('tania');
sayHello('gemma');
sayHello('mel');
const name = 'claudia';
sayHello(name);

/*
    crear función que calcule la media de 3 valores
    necesita:
        recibir 3 parametros--> 3 notas
    devolver:
        la media
*/
//ejecuta cuando carga la pagina
const mark1 = document.querySelector('.js-mark1');
const mark2 = document.querySelector('.js-mark2');
const mark3 = document.querySelector('.js-mark3');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

// se ejecuta dentro de la funcion del evento  handleClick
function average(nota1, nota2, nota3) {
  const sum = nota1 + nota2 + nota3;
  const avg = sum / 3;
  return avg;
}
//esta funcion se ejecuta cuando el usuario hace click en el boton
function handleClickMedia(event) {
  event.preventDefault();
  const valueNota1 = parseFloat(mark1.value);
  const valueNota2 = parseFloat(mark2.value);
  const valueNota3 = parseFloat(mark3.value);
  // ejecuto la funcion  para calcular el promedio
  const media = average(valueNota1, valueNota2, valueNota3);
  result.innerHTML = media;
  //currentTarget, target
}

//ejecuta cuando la usuario hace click en el boton
btn.addEventListener('click', handleClickMedia);
