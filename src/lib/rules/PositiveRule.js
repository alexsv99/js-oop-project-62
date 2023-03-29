import BaseRule from './BaseRule';

const validateFn = (value) => !Number.isNaN(value) && value > 0;

export default class PositiveRule extends BaseRule {
  validate = (value) => validateFn.bind(this)(value);
}
