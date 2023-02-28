const reverseString = require('../reverseString');

test('reverseString function should return the correct result', () => {
  const string = 'Hello';
  const reversed = 'olleH';
  const result = reverseString(string);

  expect(result).toBe(reversed);
});
