import BaseSchema from './BaseSchema';
import notNull from '../rules/notNull';
import isArray from '../rules/isArray';
import sizeOf from '../rules/sizeOf';

export default class ArraySchema extends BaseSchema {
  size;

  required() {
    this.addRule(notNull);
    this.addRule(isArray);

    return this;
  }

  sizeOf(size) {
    this.size = size;
    this.addRule(sizeOf.bind(this));

    return this;
  }
}
