module.exports = (string = '') =>
  string.split('').reduce((prev, curr) => [curr, ...prev].join(''), []);
