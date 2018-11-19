export default {
  isEnabledBtnNext: true,
  selectedItems: {
    brand: null,
    model: null,
    transmission: null,
    fuel: null,
  },
  currentState: null,
  data: {},
  get currentList() {
    let result = [];
    for (let val in this.selectedItems) {
      this.currentState = val;
      if (this.selectedItems[val] === null) {
        if (val === 'brand') {
          let brands = [];
          this.data.cars.forEach((car) => {
            brands.push(car.brand);
          });
          return brands;
        }
        else if (val === 'model') {
          let models;
          this.data.cars.forEach((car) => {
            if (car.brand === this.selectedItems.brand) {
              models = car.models;
            }
          });
          return models;
        }
        else {
          return this.data[val];
        }
      } else {
        result.push(this.selectedItems[val]);
        if (result.length === 4) {
          return result;
        }
      }
    }
  }
};
