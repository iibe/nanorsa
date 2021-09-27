/**
 * Makes decimal adjustment for a number with given presicion.
 * @param {number} number Number.
 * @param {number} precision Floating point.
 * @return {number} Returns an integer in range of [min, max].
 */
module.exports = function round(number, precision = 0) {
  const sign = Math.sign(number);
  const tens = Math.pow(10, precision);
  number = Math.abs(number);
  return sign * (Math.round((number + Number.EPSILON) * tens) / tens);
};
