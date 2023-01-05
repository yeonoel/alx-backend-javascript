export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // static method
  static get [Symbol.species]() { return this };

  // method
  cloneCar() {
    return new this.constructor[Symbole.species]();
  }
}
