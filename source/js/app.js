"use strict";

const mainNav = document.querySelector(`.main-nav`);
const menuButton = document.querySelector(`.main-nav__toggle`);

mainNav.classList.remove('main-nav--nojs')

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--active');
  menuButton.blur();
})
