import car from '10-car';

export default class EVCar extands Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // mothod 
  cloneCar() {
    return new Car[Symbol.species]();
  }
}
