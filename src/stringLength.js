module.exports = (string) => {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw new Error('String length must be between 1 to 10 chars!');
  }
  return length;
};
