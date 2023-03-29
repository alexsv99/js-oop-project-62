import Validator from '../src';

test('string rule', () => {
  const v = new Validator();
  // expect().toBe()

  const schema = v.string();
  expect(schema.isValid('')).toBeTruthy();
  expect(schema.isValid(null)).toBeTruthy();
  expect(schema.isValid(undefined)).toBeTruthy();
  expect(schema.isValid('some text')).toBeTruthy();
});

test('required rule', () => {
  const v = new Validator();
  const schema = v.required();

  expect(schema.isValid('go yuohoou!')).toBeTruthy();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();
})

test('minLength rule', () => {
  const v = new Validator();
  const schema = v.minLength(5);

  expect(schema.isValid('go yuohoou!')).toBeTruthy();
  expect(schema.isValid('four')).toBeFalsy();
  expect(schema.minLength(10).isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('sea')).toBeFalsy();
})

test('contains rule', () => {
  const v = new Validator();
  const schema = v.contains('go');

  expect(schema.isValid('go yuohoou!')).toBeTruthy();
  expect(schema.isValid('programm')).toBeFalsy();
  expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('sea')).toBeFalsy();
})
