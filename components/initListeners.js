import render from './render.js';

export default function (state) {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn--next')) {
      render(state);
    } else if (e.target.classList.contains('btn--prev')) {
      const objKeys = Object.keys(state.selectedItems);
      state.selectedItems[objKeys[objKeys.indexOf(state.currentState)]] = null;
      state.selectedItems[objKeys[objKeys.indexOf(state.currentState) - 1]] = null;
      render(state);
    }
  });

};


