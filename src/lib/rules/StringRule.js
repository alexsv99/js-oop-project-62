import BaseRule from './BaseRule';

export default class StringRule extends BaseRule {
  #possibleVal = ['', null, undefined];

  validate = (value) => this.#possibleVal.includes(value) || value.length;
}
