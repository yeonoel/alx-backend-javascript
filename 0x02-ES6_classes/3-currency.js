export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  // code
  get code() {
    return this._code;
  }
  set code(value) {
    this._code = value;
  }

  // name
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._name})`;
  }
}
