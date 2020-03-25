
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

  new WOW().init();

  $('.nav').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Заполните поле телефон",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите в формате name@domain.com"
      },
      userQuestion: {
        required: "Заплните поле вопрос",
        minlength: "Вопрос не короче двух букв"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.toggleClass('modal--visible');
          ym(61266316, 'reachGoal', 'submitForm'); return true;
        }
      });
    }
  });
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Заполните поле телефон",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите в формате name@domain.com"
      },
      userQuestion: {
        required: "Заплните поле вопрос",
        minlength: "Вопрос не короче двух букв"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          ym(61266316, 'reachGoal', 'submitForm'); return true;
        }
      });
    }
  });
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      userName: {
        required: "Заполните поле имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Заполните поле телефон",
      userEmail: {
        required: "Заполните поле email",
        email: "Введите в формате name@domain.com"
      },
      userQuestion: {
        required: "Заплните поле вопрос",
        minlength: "Вопрос не короче двух букв"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          ym(61266316, 'reachGoal', 'submitForm'); return true;
        }
      });
    }
  });

  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7 (___) ___-__-__"});

  var player;
  $('.video__play').on('click' , function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'Y8Q9ptCXzL0',
      events: {
        'onReady': videoPlay,
      }
    });
  })
    function videoPlay(event) {
      event.target.playVideo();
    };

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [64, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  });
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



