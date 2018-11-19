import getData from "./getData.js";
import render from "./render.js";
import state from "./state.js";
import initListeners from "./initListeners.js";


getData('./data/cars.json').then(data => {
  state.data = data;
  render(state);
  initListeners(state);
}, error => {
  alert(error);
});
