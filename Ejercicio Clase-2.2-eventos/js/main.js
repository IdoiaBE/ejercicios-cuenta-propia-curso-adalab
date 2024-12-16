
// Primer paso: Recogo los elementos de HTML que quiero usar o sobre los que quiero actuar (escuchar, cambiar...)

const buttonMenu = document.querySelector('.js-btnMenu');
const menuList = document.querySelector('.js-listMenu');
const darkMode = document.querySelector('.js-darkMode');
const lightMode = document.querySelector('.js-lightMode');
const main = document.querySelector('.js-main');
const buttonClose = document.querySelector('.js-btnClose');
const modal = document.querySelector('.js-modal');
const form = document.querySelector('.js-form');
const text = document.querySelector('.js-text');

// Segundo paso: Escucho el evento y programo una respuesta
//Sintáxis=> nombre-de-la-constante o variable-creada-en-js.addEventListener('tipo de evento', función con código a ejecutar)

buttonMenu.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
});

//element.classList.add('class') --> para añadir una clase de css a ese elemento en el HTML
//element.classList.remove('class') --> para quitar una clase de css a ese elemento en el HTML
//element.classList.togglr('class') --> para alternar una clase de css a ese elemento en el HTML (si no la tiene se la pone y si la tiene se la quita)


darkMode.addEventListener('click', () => {
  main.classList.add('dark');
  main.classList.remove('light');
});

//Si sólo añades la clase, al pinchar en el otro modo se van a ir añadiendo todas las clases al elemento html y va a predominar la última escrita en la hoja de css

lightMode.addEventListener('click', () => {
  main.classList.add('light');
  main.classList.remove('dark');
});

//Si sólo le añado la clase hidden, la clase modal ya tiene una caracterñisticas y un display flex y como va la última en el css va a predominar asi que también tengo que quitarle la clase modal
//o poner la clase hidden al final

buttonClose.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('modal')
});

//Dos maneras: escuchar el evento de hacer click en el botón de enviar y escuchar el evento del submit en el formulario

//2.
form.addEventListener('submit', (event) => {
  //Cuando ejecuto la función arrow, el navegador me da un montón de info de ese evento, que se recibe entre los parámetros ().

  //Para prevenir que el evento submit refresque la página
  event.preventDefault();

  //Para ver en la consola qué info tiene ese evento
  console.log(event);

  //Para que la consola me indique cuales son estas dos propiedades en este evento
  console.log(event.currentTarget);
  console.log(event.target);
});
