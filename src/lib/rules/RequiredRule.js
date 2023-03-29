import BaseRule from './BaseRule';

const validateFn = (value) => value && ![null, ''].includes(value);

export default class RequiredRule extends BaseRule {
  validate = (value) => validateFn.bind(this)(value);
}
