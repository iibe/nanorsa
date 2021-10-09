module.exports = function bingcd(a, b) {
  if (!(Number.isInteger(a) && Number.isInteger(b))) {
    throw new Error("Parameters should be an integer numbers.");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  // gcd(a, 0) == a, gcd(0, b) == b, gcd(0, 0) == 0
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
    if (a > b) [a, b] = [b, a];

    b -= a;
  } while (b !== 0);

  return a << p;
};
