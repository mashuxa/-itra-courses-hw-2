import getData from "./getData.js";
import initApp from "./initApp.js";
import "./initListeners.js";

getData('./data/cars.json').then(data => {
  initApp(data);
}, error => {
  alert(error);
});