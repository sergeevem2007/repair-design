
/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal );
  });
    closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  modal.mouseup(function (e){
    if (!modalDialog.is(e.target) 
      && modalDialog.has(e.target).length === 0) {
      modal.toggleClass('modal--visible');
  }
  });
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width()+10+bullets.width()+10);
  bullets.css('left', prev.width()+10);
});


$(this).keydown(function(eventObject){
  if (eventObject.which == 27)
      $('.modal').removeClass('modal--visible');
});


var scrollTop = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scrollTop.addClass('show');
  } else {
    scrollTop.removeClass('show');
  }
});

scrollTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1500');
});