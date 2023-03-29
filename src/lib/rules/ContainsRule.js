import BaseRule from './BaseRule';

export default class ContainsRule extends BaseRule {
  constructor(matchStr) {
    super();
    this.matchStr = matchStr;
  }

  validate = (value) => value && value.includes(this.matchStr);
}
