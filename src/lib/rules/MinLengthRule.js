import BaseRule from './BaseRule';

export default class MinLengthRule extends BaseRule {
  constructor(minLength) {
    super();
    this.minLength = minLength;
  }

  validate = (value) => value && value.length >= this.minLength;
}
