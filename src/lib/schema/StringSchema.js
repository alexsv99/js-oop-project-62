import BaseSchema from './BaseSchema';
import notNull from '../rules/notNull';
import notEmptyString from '../rules/notEmptyString';
import minLengthString from '../rules/minLengthString';
import containsString from '../rules/containsString';

export default class StringSchema extends BaseSchema {
  minLengthStr;

  matchStr;

  required() {
    this.addRule(notNull);
    this.addRule(notEmptyString);

    return this;
  }

  minLength(minLength = 0) {
    this.minLengthStr = minLength;
    this.addRule(minLengthString.bind(this));

    return this;
  }

  contains(matchStr = '') {
    this.matchStr = matchStr;
    this.addRule(containsString.bind(this));

    return this;
  }
}
