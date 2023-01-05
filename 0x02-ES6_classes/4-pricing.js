import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  //amount
  get amount() {
    return this._amount;
  }
  set amount(value) {
    this._amount = value;
  }

  //currency
  get currency() {
    return this._currency;
  }
  set currency(value) {
    this._currency = value;
  }

  //methode
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  //static methode
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
