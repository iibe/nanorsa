module.exports = function bingcd(a, b) {
  if (typeof a !== "bigint" || typeof b !== "bigint") {
    throw new Error("Parameters should have BigInt type.");
  }

  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;

  // gcd(a, 0) == a, gcd(0, b) == b, gcd(0, 0) == 0
  if (a === 0n) return b;
  if (b === 0n) return a;

  // Find P, where P is the greatest power of 2 that divides both 'a' and 'b':
  let p;
  for (p = 0n; ((a | b) & 1n) === 0n; ++p) {
    a >>= 1n;
    b >>= 1n;
  }

  // Divide 'a' by 2 until it becomes an odd:
  while ((a & 1n) === 0n) a >>= 1n;

  do {
    // If 'b' is even, remove all factor of 2 in 'b'.
    while ((b & 1n) === 0n) b >>= 1n;

    // Now 'a' and 'b' are both odd. Swap if necessary so a <= b, then set b = b - a (which is even).
    if (a > b) [a, b] = [b, a];

    b -= a;
  } while (b !== 0n);

  return a << p;
};
