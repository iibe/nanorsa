/**
 * Binary power. More efficient alghorithm for raising a power of number.
 * @source
 * @param {number} number Base number.
 * @param {number} power Exponent(or power, or index).
 * @return {number} Result of exponentiation.
 */
module.exports = function binpow(number, power) {
  let result = 1;

  // While power is not a zero
  while (power) {
    // If power can be divided by 2
    if (power & 1) {
      result *= number;
    }

    number **= 2; // Square
    power >>= 1; // Whole part of division by 2
  }

  return result;
};

/**
 * @source https://e-maxx.ru/algo/binary_pow
 *
 * NOTE: Bitwise AND
 * 14 (base 10) === 1110 (base 2)
 *  9 (base 10) === 1001 (base 2)
 * ------------------------------
 * 14 & 9       === 1000 (base 2) === 8 (base 10)
 *
 * NOTE: Right bitwise shift
 * 5 >> 1 === (101) shifts to 0(10) === 2 (base 10)
 * 7 >> 1 === (111) shifts to 1(11) === 3 (base 10)
 * 8 >> 1 === (1000) shifts to 0(100) === 4 (base 10)
 */
