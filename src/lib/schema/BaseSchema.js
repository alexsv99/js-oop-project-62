export default class BaseSchema {
  rules = [];

  addRule(newRule) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (this.rules[i].constructor.name === newRule.constructor.name) {
        this.rules[i] = newRule;

        return;
      }
    }

    this.rules.push(newRule);
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
