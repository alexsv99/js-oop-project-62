import BaseSchema from './BaseSchema';
import notNull from '../rules/notNull';
import isArray from '../rules/isArray';
import sizeOf from '../rules/sizeOf';

export default class ArraySchema extends BaseSchema {
  required() {
    this.addRule(notNull);
    this.addRule(isArray);

    return this;
  }

  sizeOf(size) {
    this.expected.sizeOf = [size];
    this.addRule(sizeOf);

    return this;
  }
}
