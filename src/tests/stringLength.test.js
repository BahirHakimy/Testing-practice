const stringLength = require('../stringLength.js');

test('stringLength should return the correct lenght of "Hello"', () => {
  //* Arrange
  const text = 'Hello';

  //* Act
  const length = stringLength(text);

  //* Assert
  expect(length).toBe(5);
});

test('stringLength should throw an Error if length is less than 1', () => {
  const text = '';
  const result = () => stringLength(text);
  expect(result).toThrow('String length must be between 1 to 10 chars!');
});

test('stringLength should throw an Error if length is longer than 10 chars', () => {
  const text = 'Hello world!';
  const result = () => stringLength(text);
  expect(result).toThrow('String length must be between 1 to 10 chars!');
});
