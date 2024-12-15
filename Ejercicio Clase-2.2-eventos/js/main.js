
// Primer paso: Recogo los elementos de HTML que quiero usar o sobre los que quiero actuar (escuchar, cambiar...)

const buttonMenu = document.querySelector('.js-btnMenu')
const menuList = document.querySelector('.js-listMenu')

// Segundo paso: Escucho el evento y programo una respuesta
//Sintáxis= nombre-de-la-constante o variable-creada-en-js.addEventListener('tipo de evento', código a ejecutar)

buttonMenu.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  //element.classList.add('class') --> para añadir una clase de css a ese elemento en el HTML
  //element.classList.remove('class') --> para quitar una clase de css a ese elemento en el HTML
  //element.classList.togglr('class') --> para alternar una clase de css a ese elemento en el HTML (si no la tiene se la pone y si la tiene se la quita)
});

