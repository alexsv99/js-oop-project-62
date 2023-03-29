import BaseSchema from './BaseSchema';
import RequiredRule from '../rules/RequiredRule';
import PositiveRule from '../rules/PositiveRule';
import RangeRule from '../rules/RangeRule';

export default class NumberSchema extends BaseSchema {
  required() {
    this.addRule(new RequiredRule());

    return this;
  }

  positive() {
    this.addRule(new PositiveRule());

    return this;
  }

  range(min, max) {
    this.addRule(new RangeRule(min, max));

    return this;
  }
}
