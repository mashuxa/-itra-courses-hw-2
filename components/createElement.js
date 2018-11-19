export default function (state, className, inner, wrapper, nodeType = 'div') {
  const nodeElem = document.createElement(nodeType);
  const btnNext = document.querySelector('.btn--next');
  nodeElem.className = className;
  nodeElem.innerHTML = inner;
  nodeElem.addEventListener('click', (e) => {
    btnNext.classList.add('btn--enabled')
    state.selectedItems[state.currentState] = nodeElem.innerText;
    Array.from(document.getElementsByClassName(className)).forEach((item) => {
      item.classList.remove(`${className}--selected`);
    });
    nodeElem.classList.add(`${className}--selected`);
  });

  wrapper.appendChild(nodeElem);
}

