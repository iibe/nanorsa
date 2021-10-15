module.exports = function binpow(number, power) {
  if (!(Number.isInteger(number) && Number.isInteger(power))) {
    throw new Error(
      `Parameters <number, power> = <${number}, ${power}> should be an integer numbers.`,
    );
  }

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
