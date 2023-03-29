import BaseSchema from './BaseSchema';
import StringRule from '../rules/StringRule';
import RequiredRule from '../rules/RequiredRule';
import MinLengthRule from '../rules/MinLengthRule';
import ContainsRule from '../rules/ContainsRule';

export default class StringSchema extends BaseSchema {
  constructor() {
    super();
    this.addRule(new StringRule());
  }

  required() {
    this.addRule(new RequiredRule());

    return this;
  }

  minLength(minLength = 0) {
    this.addRule(new MinLengthRule(minLength));

    return this;
  }

  contains(matchStr = '') {
    this.addRule(new ContainsRule(matchStr));

    return this;
  }
}
