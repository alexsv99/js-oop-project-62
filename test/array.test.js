import Validator from "../index";

test('array schema, default rule', () => {
  const v = new Validator();
  const schema = v.array();

  expect(schema.isValid(null)).toBeTruthy();
});

test('array schema, required rule', () => {
  const v = new Validator();
  const schema = v.array();
  schema.required();

  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.isValid(['hexlet'])).toBeTruthy();
});

test('array schema, required rule', () => {
  const v = new Validator();
  const schema = v.array();
  schema.sizeOf(2);

  expect(schema.isValid(['hexlet'])).toBeFalsy();
  expect(schema.isValid(['hexlet', 'javascript'])).toBeTruthy();
});
