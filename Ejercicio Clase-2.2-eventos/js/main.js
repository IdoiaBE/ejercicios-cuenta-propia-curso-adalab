const btn = document.querySelector('.js-button');
const menuNav = document.querySelector('.js-menuNav');
const darkLink = document.querySelector('.js-dark');
const ligthLink = document.querySelector('.js-ligth');
const main = document.querySelector('.js-main');

btn.addEventListener('click', () => {
  //menuNav.classList.remove('hidden');
  menuNav.classList.toggle('hidden');
});

darkLink.addEventListener('click', () => {
  main.classList.add('dark');
  main.classList.remove('ligth');
});

ligthLink.addEventListener('click', () => {
  main.classList.add('ligth');
  main.classList.remove('dark');
});

//seccion modal
const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close');

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

const form = document.querySelector('.js-form');
const name = document.querySelector('.js-name');

form.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
  //elemento con la funcion addEventListener
  console.log(event.currentTarget);
  //elemento sobre el que hacemos la accion
  console.log(event.target);
});

//ejercicio de las frutas

const strawberry = document.querySelector('.fruit-strawberry');
const banana = document.querySelector('.fruit-banana');
const kiwi = document.querySelector('.fruit-kiwi');

strawberry.addEventListener('click', (event) => {
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle('fruit--selected');
});

banana.addEventListener('click', (event) => {
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle('fruit--selected');
});

kiwi.addEventListener('click', (event) => {
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle('fruit--selected');
});

const ul = document.querySelector('.fruits');
ul.addEventListener('click', (event) => {
  console.log(event);
  //elemento con la funcion addEventListener
  console.log(event.currentTarget);
  //elemento sobre el que hacemos la accion
  console.log(event.target);
  // acciones sobre el elemento clickado
});
