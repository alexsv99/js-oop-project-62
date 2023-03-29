import BaseRule from './BaseRule';

export default class RangeRule extends BaseRule {
  constructor(min, max) {
    super();
    this.min = min;
    this.max = max;
  }

  validate = (value) => !Number.isNaN(value) && value >= this.min && value <= this.max;
}
