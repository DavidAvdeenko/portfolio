const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   itemClose = document.querySelector('.menu__list');


hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

itemClose.addEventListener('click', () => {
   menu.classList.remove('active');
});
closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
   lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});

$(window).scroll(function () {
   if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
   } else {
      $('.pageup').fadeOut();
   }

});


$(document).ready(function () {
   new WOW().init();
});

