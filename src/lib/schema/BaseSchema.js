export default class BaseSchema {
  rules = [];

  addRule(newRule) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (this.rules[i] === newRule) {
        return;
      }
    }

    this.rules.push(newRule);
  }

  isValid(value) {
    for (let i = 0; i < this.rules.length; i += 1) {
      if (!this.rules[i](value)) {
        return false;
      }
    }

    return true;
  }
}
