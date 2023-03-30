import BaseSchema from './BaseSchema';
import notNull from '../rules/notNull';
import isNumber from '../rules/isNumber';
import isPositive from '../rules/isPositive';
import range from '../rules/range';

export default class NumberSchema extends BaseSchema {
  min;

  max;

  required() {
    this.addRule(notNull);
    this.addRule(isNumber);

    return this;
  }

  positive() {
    this.addRule(isPositive);

    return this;
  }

  range(min, max) {
    this.min = min;
    this.max = max;
    this.addRule(range.bind(this));

    return this;
  }
}
