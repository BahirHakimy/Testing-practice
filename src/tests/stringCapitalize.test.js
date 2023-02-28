const stringCapitalize = require('../stringCapitalize');

test('The function should return the correct result for hello', () => {
  const text = 'hello';
  const result = stringCapitalize(text);
  expect(result).toBe('Hello');
});
