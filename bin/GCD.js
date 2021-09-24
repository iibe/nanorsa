/**
 * Euclidean algorithm for finding the greatest common divider - GCD.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @return {number} Greatest common divider, or zero if it's not found.
 */
module.exports = function CGD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
};
