// eslint-disable-next-line
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  //set and get amount
  get amount() {
    return this._amount;
  }
  set amount(value) {
    this._amount = value;
  }

  //set and get currency
  get currency() {
    return this._currency;
  }
  set currency(value) {
    this._currency = value;
  }

  //method
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  //static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
