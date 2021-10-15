/**
 * Binary power algorithm is an improved alghorithm for number exponentiation.
 *
 * @param {bigint} number Base number.
 * @param {bigint} power Exponent (or power, or index).
 * @return {bigint} Result of exponentiation.
 */
module.exports = function binpow(number, power) {
  if (typeof number !== "bigint" || typeof power !== "bigint") {
    throw new Error("Parameters should be a big integers.");
  }

  power = power < 0n ? -power : power;

  let result = 1n;
  while (power > 0n) {
    // If power is odd, multiply power with result
    if (power & 1n) {
      result *= number;
    }
    // Power must be even now
    power >>= 1n; // power = power/2
    number *= number; // number = number^2
  }

  return result;
};
