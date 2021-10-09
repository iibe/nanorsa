/**
 * Sieve of Atkin is improved version of Eratosthene's sieve for finding a primes.
 *
 * @param limit Finds all primes until `limit`.
 * @return Prime numbers list.
 */
export function atkin(limit: number): number[];

/**
 * Binary GCD algorithm (or Stein's algorithm or the binary Euclidean algorithm) is an improved version of Euclidean algorithm for finding the greatest common divisor of two nonnegative integers.
 *
 * @param a First integer number.
 * @param b Second integer number.
 * @return Greatest common divisor.
 */
export function bingcd(a: number, b: number): number;

/**
 * Binary power algorithm is an improved alghorithm for number exponentiation.
 *
 * @param number Base number.
 * @param power Exponent (or power, or index).
 * @return Result of exponentiation.
 */
export function binpow(number: number, power: number): number;

/**
 * @param min Minimum possible generated number.
 * @param max Maximum possible generated number.
 * @return Random integer from [min, max] range.
 */
export function range(min: number, max: number): number;

/**
 * Makes decimal adjustment for a `number` with given `presicion`.
 *
 * @param number Base number.
 * @param precision Floating point precision.
 * @return Rounded float number.
 */
export function range(number: number, precision?: number): number;
