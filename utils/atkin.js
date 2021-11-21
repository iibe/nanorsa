module.exports = function atkin(limit) {
  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error("Parameter should be a positive integer.");
  }

  // Initialize the sieve array with falsy values:
  const sieve = Array(limit).fill(false);

  /**
   * Mark sieve[n] is true if one of the following is true:
   * a) n = 4x^2 + y^2 has odd number of solutions, i.e., there exist odd number of distinct pairs (x, y) that satisfy the equation and n % 12 = 1 or n % 12 = 5
   * b) n = 3x^2 + y^2 has odd number of solutions and n % 12 = 7
   * c) n = 3x^2 - y^2 has odd number of solutions, x > y and n % 12 = 11
   */
  for (let x = 1; x * x < limit; x++) {
    for (let y = 1; y * y < limit; y++) {
      let i = 4 * x * x + y * y;
      if (i <= limit && (i % 12 === 1 || i % 12 === 5)) sieve[i] ^= true;

      i = 3 * x * x + y * y;
      if (i <= limit && i % 12 === 7) sieve[i] ^= true;

      i = 3 * x * x - y * y;
      if (i <= limit && i % 12 === 11 && x > y) sieve[i] ^= true;
    }
  }

  // Mark all multiples of squares as non-prime:
  for (let s = 5; s * s < limit; s++) {
    if (sieve[s]) {
      for (let i = s * s; i < limit; i += s * s) {
        sieve[i] = false;
      }
    }
  }

  const result = [];

  // NOTE: 2 and 3 are known to be prime, but 1 isn't prime because, mathematicians define a number as prime if it is divided by exactly two numbers.
  if (limit > 2) result.push(2);
  if (limit > 3) result.push(3);

  for (let i = 5; i < limit; i++) {
    if (sieve[i]) result.push(i);
  }

  return result;
};
