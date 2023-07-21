const burgerButton = document.querySelector('.header__toggle');
const pageHeader = document.querySelector('.header');
const pageBody = document.body;

burgerButton.addEventListener('click', () => {
  pageHeader.classList.toggle('is-open');
  pageBody.classList.toggle('no-scroll');
});
