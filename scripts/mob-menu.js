const refs = {
  openBtn: document.querySelector('.menu-open-btn'),
  close: document.querySelectorAll('.js-close'),
  backdrop: document.querySelector('.backdrop'),
};

const closeArray = Array.prototype.slice.call(refs.close);

refs.openBtn.addEventListener('click', () => {
  refs.backdrop.classList.remove('is-hidden');
  document.body.style.overflowY = 'hidden';
});

closeArray.forEach(item => {
  item.addEventListener('click', () => {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflowY = 'scroll';
  });
});
