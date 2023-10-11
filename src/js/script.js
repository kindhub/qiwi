import VSwiper from "./modules/VSwiper";
import VacancyBtn from "./modules/VacancyBtn";
import Modal from "./modules/Modal";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

function initValuesSlider() {
  swiper.init(".tmpl-hh__values__slider", {
    effect: "fade",
    slidesPerView: 1,
    navigation: {
      prevEl: ".tmpl-hh__values-slider-arrow-prev",
      nextEl: ".tmpl-hh__values-slider-arrow-next",
      disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}
function initTeamsSlider() {
  swiper.init(".tmpl-hh__teams__slider", {
    slidesPerView: 2,
    breakpoints: {
      1019: {
        slidesPerView: 1,
        centeredSlides: false,
        autoHeight: true,
      },
    },
    navigation: {
      prevEl: ".tmpl-hh__teams-slider-arrow-prev",
      nextEl: ".tmpl-hh__teams-slider-arrow-next",
      disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}
function initConditionsSlider() {
  swiper.init(".tmpl-hh__conditions__slider", {
    effect: "fade",
    slidesPerView: 1,
    navigation: {
      prevEl: ".tmpl-hh__conditions-slider-arrow-prev",
      nextEl: ".tmpl-hh__conditions-slider-arrow-next",
      disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}
function initGallerySlider() {
  swiper.init(".tmpl-hh__gallery__slider", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
      prevEl: ".tmpl-hh__gallery-slider-arrow-prev",
      nextEl: ".tmpl-hh__gallery-slider-arrow-next",
      disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

function listenTestModalBtnClick() {
  document.getElementById("img1").addEventListener("click", function () {
    one.show();
  });
}
function listenTestModalBtnClickTwo() {
  document.getElementById("img2").addEventListener("click", function () {
    two.show();
  });
}
function listenTestModalBtnClickThree() {
  document.getElementById("img3").addEventListener("click", function () {
    three.show();
  });
}
function listenTestModalBtnClickFour() {
  document.getElementById("img4").addEventListener("click", function () {
    four.show();
  });
}
function listenTestModalBtnClickFive() {
  document.getElementById("img5").addEventListener("click", function () {
    five.show();
  });
}

const one = new Modal("#one");
const two = new Modal("#two");
const three = new Modal("#three");
const four = new Modal("#four");
const five = new Modal("#five");

const swiper = new VSwiper();
new VacancyBtn();

initValuesSlider();
initTeamsSlider();
initGallerySlider();
initConditionsSlider();
listenTestModalBtnClick();
listenTestModalBtnClickTwo();
listenTestModalBtnClickThree();
listenTestModalBtnClickFour();
listenTestModalBtnClickFive();
