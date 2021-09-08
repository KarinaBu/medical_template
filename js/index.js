window.addEventListener('DOMContentLoaded', function () {

  //Бургер-меню медиа

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  });

  document.getElementById('#close').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  });

  document.querySelector('#nav').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  });

  //Слайдер Hero

  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });

  //Карточки Team

  if (window.innerWidth < 1428 && window.innerWidth > 576) {
    jQuery(document).ready(function ($) {
      if ($('.team__file').find('.team__card').length > 4) {
        $('.team__card:nth-child(5)').slideToggle('');
        $('.team__btn').click(function () {
          $('.team__card:nth-child(n+5)').slideToggle('');
          $(this).toggleClass('opnd_g');
          if ($(this).hasClass('opnd_g')) {
            $(this).html('All team');
          } else {
            $(this).html('See more');
          }
        });
      } else {
        $('.team__btn').hide();
      }
    });
  }


})