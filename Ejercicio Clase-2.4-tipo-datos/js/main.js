let name;
console.log(name);

let fruits = null;
console.log(fruits);

const coffee = null;
console.log(coffee);

//const text = document.querySelector('texto');
//console.log(text);

const price = 20.7;
const lastname = 'Maria';

let isPremium = true; // false

/*
    1.- declarar las var y seleccionar los elementos del HTML, inputs, span, btn
    2.- escuchar un evento sobre el boton, click.
    3.- Recoger los valores de los input.
    4.- Hacer la operación de suma.
    5.- PIntar el resultado en el HTML
*/

// se ejecuta cuando carga la pagina
const inputNumb1 = document.querySelector('.js-num1');
const inputNumb2 = document.querySelector('.js-num2');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
const ope = document.querySelector('.js-ope');

btn.addEventListener('click', (event) => {
  // se ejecuta cuando la usuaria hace click en el boton
  event.preventDefault();
  const num1 = parseInt(inputNumb1.value);
  const num2 = parseInt(inputNumb2.value);

  const total = ope.value === 'sum' ? num1 + num2 : num1 / num2;

  //const total = num1 + num2;
  result.innerHTML = total;
});
