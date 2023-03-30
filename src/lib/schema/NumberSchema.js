import BaseSchema from './BaseSchema';
import notNull from '../rules/notNull';
import number from '../rules/number';
import positive from '../rules/positive';
import range from '../rules/range';

export default class NumberSchema extends BaseSchema {
  min;

  max;

  required() {
    this.addRule(notNull);
    this.addRule(number);

    return this;
  }

  positive() {
    this.addRule(positive);

    return this;
  }

  range(min, max) {
    this.min = min;
    this.max = max;
    this.addRule(range.bind(this));

    return this;
  }
}
