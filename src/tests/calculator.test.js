const calculator = require('../calculator');

describe('Calculator addition', () => {
  test('Returns the right result for 20 + 50', () => {
    const a = 20,
      b = 50;
    const result = calculator.add(a, b);
    expect(result).toBe(70);
  });

  test('Throws an error when one of arguments is not present', () => {
    const a = 30;
    const result = () => calculator.add(a);
    expect(result).toThrow(
      'Both a and b arguments are required to perform addition!'
    );
  });

  test('Throws an error when parameters passed to function is not number', () => {
    const a = 30,
      b = 'hello';
    const result = () => calculator.add(a, b);
    expect(result).toThrow('Arguments passed to function must be numbers!');
  });
});

describe('Calculator subtraction', () => {
  test('Returns the right result for 50 - 20', () => {
    const a = 50,
      b = 20;
    const result = calculator.subtract(a, b);
    expect(result).toBe(30);
  });

  test('Throws an error when one of arguments is not present', () => {
    const a = 30;
    const result = () => calculator.subtract(a);
    expect(result).toThrow(
      'Both a and b arguments are required to perform subtraction!'
    );
  });

  test('Throws an error when parameters passed to function is not number', () => {
    const a = 30,
      b = 'hello';
    const result = () => calculator.subtract(a, b);
    expect(result).toThrow('Arguments passed to function must be numbers!');
  });
});

describe('Calculator division', () => {
  test('Returns the right result for 30 / 6', () => {
    const a = 30,
      b = 6;
    const result = calculator.divide(a, b);
    expect(result).toBe(5);
  });

  test('Throws an error when one of arguments is not present', () => {
    const a = 30;
    const result = () => calculator.divide(a);
    expect(result).toThrow(
      'Both a and b arguments are required to perform division!'
    );
  });

  test('Throws an error when parameters passed to function is not number', () => {
    const a = 30,
      b = 'hello';
    const result = () => calculator.divide(a, b);
    expect(result).toThrow('Arguments passed to function must be numbers!');
  });

  test('Throws an error when the second parameter is zero', () => {
    const a = 30,
      b = 0;
    const result = () => calculator.divide(a, b);
    expect(result).toThrow("It's not possible to divide by zero!");
  });
});

describe('Calculator multiplication', () => {
  test('Returns the right result for 30 * 6', () => {
    const a = 30,
      b = 6;
    const result = calculator.multiply(a, b);
    expect(result).toBe(180);
  });

  test('Throws an error when one of arguments is not present', () => {
    const a = 30;
    const result = () => calculator.multiply(a);
    expect(result).toThrow(
      'Both a and b arguments are required to perform multiplication!'
    );
  });

  test('Throws an error when parameters passed to function is not number', () => {
    const a = 30,
      b = 'hello';
    const result = () => calculator.multiply(a, b);
    expect(result).toThrow('Arguments passed to function must be numbers!');
  });
});
