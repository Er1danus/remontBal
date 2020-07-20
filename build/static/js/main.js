"use strict";

$(document).ready(function () {
  svg4everybody({});

  var openCallbackForm = function openCallbackForm() {
    $(document).on('click', '.header-nav__btn', function (event) {
      event.preventDefault();
      $('.callback__body').addClass('callback--open');
    });
  };

  var closeTheForm = function closeTheForm() {
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      var div = $(".callback__body"); // тут указываем ID элемента

      if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) {
        // и не по его дочерним элементам
        div.removeClass('callback--open'); // скрываем его
      }
    });
  };

  var bannerSlider = function bannerSlider() {
    $('.js-banner').each(function () {
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        vertical: true,
        appendDots: '.banner__dots',
        customPaging: function customPaging(slider, i) {
          return '<a class="banner__dot"></a>';
        }
      });
    });
  };

  var remontBanner = function remontBanner() {
    $('.remont__js-banner').each(function () {
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        vertical: true,
        appendDots: '.remont__banner-dots',
        customPaging: function customPaging(slider, i) {
          return '<a class="remont__banner-dot"></a>';
        }
      });
    });
  };

  openCallbackForm();
  closeTheForm();
  bannerSlider();
  remontBanner();
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}