import createElement from './createElement.js';

export default function (state) {
  const wrapper = document.querySelector('.items-wrapper');
  const btnPrev = document.querySelector('.btn--prev');
  const btnNext = document.querySelector('.btn--next');

  btnPrev.classList.remove('btn--visible');
  btnNext.classList.remove('btn--visible');
  btnNext.classList.remove('btn--enabled');

  if (state.selectedItems.brand) {
    btnPrev.classList.add('btn--visible');
  }

  if (!state.selectedItems.fuel) {
    btnNext.classList.add('btn--visible');
  }

  wrapper.innerHTML = '';
  state.currentList.forEach((el) => {
    createElement(state, 'item', el, wrapper);
  });
}
