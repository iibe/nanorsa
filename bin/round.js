module.exports = function round(number, precision = 0) {
  const tens = Math.pow(10, precision);
  return Math.round((number + Number.EPSILON) * tens) / tens;
};
