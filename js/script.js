'use strict'
const burger = document.querySelector('.burger');
const body = document.body;
burger.addEventListener('click', function() {
  let mainNav = document.querySelector('.header__menu');
  let burgerSpan = document.querySelector('.burger::after');


  mainNav.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock');
})

const itemNav = document.querySelectorAll('.manu__item');
itemNav.forEach(function(event){
  event.addEventListener('click', function(on){
    body.classList.remove('lock');
    let mainNav = document.querySelector('.header__menu');
    mainNav.classList.remove('active');
    burger.classList.remove('active');
  })
})
/* ************** scroll ************** */
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

let lastScrollTop = 100;


window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.add('header_hidden');


	} else {
    header.classList.remove('header_hidden');
	}

	if (scrollDistance === 0) {
		header.classList.remove('header_hidden');
	}

	lastScrollTop = scrollDistance;
});



const suggestionsRow = document.querySelectorAll('.suggestions__row');
suggestionsRow.forEach(function(event){
  event.addEventListener('mouseover', function(){
    event.querySelector('.suggestions__row__img').classList.toggle('display');
  })
  event.addEventListener('mouseout', function(){
    event.querySelector('.suggestions__row__img').classList.toggle('display');

  })
})

const tellFormBlock = document.querySelectorAll('.application__input_number');

tellFormBlock.forEach(function(event) {
  event.addEventListener('focus', ()=> {
      event.setAttribute('value','+7');

    });
    event.addEventListener('blur', ()=> {
      event.removeAttribute('value','+7');

    });
})
