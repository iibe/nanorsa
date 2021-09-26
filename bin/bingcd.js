/**
 * Binary GCD (or Stein's) algorithm is an improved version of Euclidean algorithm for finding the greatest common divider between 2 integer numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @return {number} Greatest common divider, or zero if it's not found.
 */
module.exports = function bingcd(a, b) {
  a = Math.abs(parseInt(a));
  b = Math.abs(parseInt(b));

  // gcd(0, b) === b, gcd(a, 0) === a, gcd(0, 0) === 0
  if (a === 0) return b;
  if (b === 0) return a;

  // Find P, where P is the greatest power of 2 that divides both 'a' and 'b':
  let p;
  for (p = 0; ((a | b) & 1) === 0; ++p) {
    a >>= 1;
    b >>= 1;
  }

  // Divide 'a' by 2 until it becomes an odd:
  while ((a & 1) === 0) a >>= 1;

  do {
    // If 'b' is even, remove all factor of 2 in 'b'. Now 'a' and 'b' are both odd.
    while ((b & 1) === 0) b >>= 1;

    // Swap if necessary so a <= b, then set b = b - a (which is even).
    if (a > b) {
      let c = a;
      a = b;
      b = c;
    }

    b -= a;
  } while (b !== 0);

  return a << p;
};
