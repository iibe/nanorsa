/**
 * Random integer between the specified values.
 * @param {number} min Integer 1 (min).
 * @param {number} max Integer 2 (max).
 * @return {number} Returns an integer in range of [min, max].
 */
module.exports = function range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
};
