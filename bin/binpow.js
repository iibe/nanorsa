/**
 * Binary power algorithm is an improved alghorithm for number exponentiation.
 * @param {number} number Base number.
 * @param {number} power Exponent(or power, or index).
 * @return {number} Result of exponentiation.
 */
module.exports = function binpow(number, power) {
  power = Math.abs(parseInt(power));

  let result = 1;

  // While power is not a zero
  while (power > 0) {
    // If power is odd, multiply power with result
    if (power & 1) {
      result *= number;
    }

    // Power must be even now
    power >>= 1; // power = power/2
    number *= number; // number = number^2
  }

  return result;
};
