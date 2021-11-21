// Type definitions for nanorsa 0.0.1
// Project: https://www.npmjs.org/package/nanorsa
// Definitions by: Roman Narvatov <https://github.com/iibe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Sieve of Atkin is improved version of Eratosthene's sieve for finding a primes.
 *
 * @param limit finds all primes up to a specified `limit`.
 * @return prime numbers list.
 */
export declare function atkin(limit: number): number[];

/**
 * Binary GCD algorithm (or Stein's algorithm or the binary Euclidean algorithm) is an improved version of Euclidean algorithm for finding the greatest common divisor of two nonnegative integers.
 *
 * @param a first integer number.
 * @param b second integer number.
 * @return greatest common divisor or `a` and `b`.
 */
export declare function bingcd(a: bigint, b: bigint): bigint;

/**
 * Binary power algorithm is an improved alghorithm for number exponentiation.
 *
 * @param number base number.
 * @param power exponent (or power, or index).
 * @return exponentiation result.
 */
export declare function binpow(number: bigint, power: bigint): bigint;

/**
 * @param min minimum possible generated integer.
 * @param max maximum possible generated integer.
 * @return integer in [min, max] range.
 */
export declare function range(min: number, max: number): number;

export interface BitSize {
  bit: 4 | 8 | 16;
}
