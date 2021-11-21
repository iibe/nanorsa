const atkin = require("../utils/atkin");
const bingcd = require("../utils/bingcd");
const range = require("../utils/range");

class Generator {
  static #primes;

  constructor(bit) {
    Generator.#primes = atkin(2 ** bit - 1);
    this.regenerate();
  }

  regenerate = () => {
    // Skip first 2 primes (2 and 3) to bypass algorightm restrictions:
    this._p = Generator.#primes[range(2, Generator.#primes.length - 1)];
    this._q = Generator.#primes[range(2, Generator.#primes.length - 1)];
    this._n = this._p * this._q;
    this._phi = (this._p - 1) * (this._q - 1);
    console.log(this._p, this._q);

    // A) Find Public key - Choose 'e' such that 1 < e < φ(n) and e and φ(n) are coprime:
    const es = [];
    for (let e = 2; e < this._phi; e++) {
      if (es.length) break; // just take first, because of complex calculus
      // if (es.length > 100) break; // use it for more secure encryption

      if (bingcd(BigInt(e), BigInt(this._phi)) === 1n) {
        es.push(e);
      }
    }

    if (es.length) {
      this._e = es[range(0, es.length - 1)];
    } else {
      throw new Error("Cannot get Public key");
    }

    // B) Find Private key - Choose 'd' such that (d * e) % φ(n) = 1:
    const ds = [];
    for (let d = 2; d < this._phi; d++) {
      if (ds.length) break; // just take first, because of complex calculus
      // if (ds.length > 100) break; // use it for more secure encryption

      if ((BigInt(d) * BigInt(this._e)) % BigInt(this._phi) === 1n) {
        ds.push(d);
      }
    }

    if (es.length) {
      this._d = ds[range(0, ds.length - 1)];
    } else {
      throw new Error("Cannot get Private key");
    }
  };

  get log() {
    return { p: this._p, q: this._q, n: this._n, phi: this._phi };
  }
  get key() {
    return {
      public: { e: this._e, n: this._n },
      secret: { d: this._d, n: this._n },
    };
  }
}

module.exports = Generator;
