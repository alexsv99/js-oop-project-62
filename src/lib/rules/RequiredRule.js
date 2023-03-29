import BaseRule from './BaseRule';

const validateFn = (value) => value && !!value.length;

export default class RequiredRule extends BaseRule {
  validate = (value) => validateFn.bind(this)(value);
}
