import StringRule from './rules/StringRule';
import RequiredRule from './rules/RequiredRule';
import MinLengthRule from './rules/MinLengthRule';
import ContainsRule from './rules/ContainsRule';

class Validator {
  rules = [];

  #addRule(newRule) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (this.rules[i].constructor.name === newRule.constructor.name) {
        this.rules[i] = newRule;

        return;
      }
    }

    this.rules.push(newRule);
  }

  string() {
    this.#addRule(new StringRule());

    return this;
  }

  required() {
    this.#addRule(new RequiredRule());

    return this;
  }

  minLength(minLength = 0) {
    this.#addRule(new MinLengthRule(minLength));

    return this;
  }

  contains(matchStr = '') {
    this.#addRule(new ContainsRule(matchStr));

    return this;
  }

  isValid(value) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (!this.rules[i].validate(value)) {
        return false;
      }
    }

    return true;
  }
}

export default Validator;
