# Nano RSA

RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem that is widely used for secure data transmission. It is also one of the oldest. The acronym RSA comes from the surnames of Ron Rivest, Adi Shamir and Leonard Adleman, who publicly described the algorithm in 1977.

## Example

1. Choose primes `p = 3` and `q = 11`.
1. Compute `n = p * q` = 3 \* 11 = 33 and `φ(n) = (p - 1) * (q - 1)` = 2 \* 10 = 20.
1. Choose `e` such that `1 < e < φ(n)` and `e and φ (n) are coprime`. Let e = 7.
1. Compute a value for `d` such that `(d * e) % φ(n) = 1`. One solution is `d = 3` <=> `(3 * 7) % 20 = 1`
1. Public key is `(e, n) => (7, 33)`. Private key is `(d, n) => (3, 33)`.
1. The encryption of `m = 2` is `c = 2^7 % 33 = 29`.
1. The decryption of `c = 29` is `m = 29^3 % 33 = 2`.
