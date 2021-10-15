/**
 * Sieve of Atkin is improved version of Eratosthene's sieve for finding a primes.
 *
 * @param {number} limit Finds all primes until `limit`.
 * @return {number} Prime numbers list.
 */
export function atkin(limit: number): number[];

/**
 * Binary GCD algorithm (or Stein's algorithm or the binary Euclidean algorithm) is an improved version of Euclidean algorithm for finding the greatest common divisor of two nonnegative integers.
 *
 * @param {number} a First integer number.
 * @param {number} b Second integer number.
 * @return {number} Greatest common divisor.
 */
export function bingcd(a: number, b: number): number;

/**
 * Binary power algorithm is an improved alghorithm for number exponentiation.
 *
 * @param {bigint} number Base number.
 * @param {bigint} power Exponent (or power, or index).
 * @return {bigint} Result of exponentiation.
 */
export function binpow(number: bigint, power: bigint): bigint;

/**
 * @param {number} min Minimum possible generated number.
 * @param {number} max Maximum possible generated number.
 * @return {number} Random integer from [min, max] range.
 */
export function range(min: number, max: number): number;
