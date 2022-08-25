"use strict";

const menuButton = document.querySelector(`.main-nav__toggle`);
const mainNavigation = document.querySelector(`.main-nav__list`);

menuButton.addEventListener('click', () => {
  mainNavigation.classList.toggle('main-nav__list--active');
})
