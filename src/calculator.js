module.exports = {
  add(a, b) {
    if (!a || !b) {
      throw new Error(
        'Both a and b arguments are required to perform addition!'
      );
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments passed to function must be numbers!');
    }
    return a + b;
  },

  subtract(a, b) {
    if (!a || !b) {
      throw new Error(
        'Both a and b arguments are required to perform subtraction!'
      );
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments passed to function must be numbers!');
    }
    return a - b;
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error("It's not possible to divide by zero!");
    }
    if (!a || !b) {
      throw new Error(
        'Both a and b arguments are required to perform division!'
      );
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments passed to function must be numbers!');
    }
    return a / b;
  },

  multiply(a, b) {
    if (!a || !b) {
      throw new Error(
        'Both a and b arguments are required to perform multiplication!'
      );
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments passed to function must be numbers!');
    }
    return a * b;
  },
};
