module.exports = function binpow(number, power) {
  if (typeof number !== "bigint" || typeof power !== "bigint") {
    throw new Error("Parameters should be a big integers.");
  }

  power = power < 0n ? -power : power;

  let result = 1n;
  while (power > 0n) {
    if (power & 1n) {
      // If power is odd, multiply power with result
      result *= number;
    }
    power >>= 1n; // Power must be even now, therefore power = power / 2
    number *= number; // number = number ** 2
  }

  return result;
};
