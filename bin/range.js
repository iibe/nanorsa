/**
 * Random integer between the specified values.
 * @param {number} min Left border.
 * @param {number} max Right border.
 * @return {number} Returns an integer in range of [min, max].
 */
module.exports = function range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
