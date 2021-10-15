const atkin = require("./bin/atkin");
const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");
const range = require("./bin/range");

class RSA {
  static #instance = null;

  /**
   * Creates only one instance of RSA class throughout the app
   * @param {object} options Option list
   * @param {number} options.bit Bit complexity
   */
  static singleton(options) {
    return (RSA.#instance = RSA.#instance ?? new RSA(options));
  }

  #primes;

  constructor({ bit }) {
    this.#primes = atkin(2 ** bit - 1);
    this.create();
  }

  create = () => {
    this._p = this.#primes[range(2, this.#primes.length - 1)];
    this._q = this.#primes[range(2, this.#primes.length - 1)];
    this._n = this._p * this._q;
    this._phi = (this._p - 1n) * (this._q - 1n);

    // Generating Public Key:
    this._es = [];
    for (let e = 2n; e < this._phi; e++) {
      // Choose 'e' such that 1 < e < φ(n) and e and φ(n) are coprime
      if (bingcd(e, this._phi) === 1n) this._es.push(e);
    }
    this._e = this._es[range(0, this._es.length - 1)];

    // Generating Private Key:
    this._ds = [];
    for (let d = 2n; d < this._phi; d++) {
      // Choose 'd' such that (d * e) % φ(n) = 1
      if ((d * this._e) % this._phi === 1n) this._ds.push(d);
    }
    this._d = this._ds[range(0, this._ds.length - 1)];
  };

  /**
   * @param {bigint} int Number to encrypt.
   * @return {bigint} Encrypted number.
   */
  encrypt(int) {
    return binpow(int, this._e) % this._n;
  }

  /**
   * @param {bigint} int Number to decrypt.
   * @return {bigint} Decrypted number.
   */
  decrypt(int) {
    return binpow(int, this._d) % this._n;
  }

  /**
   * RSA encrypt method.
   * @param {string} string Plain text.
   * @returns Encrypted text.
   */
  encode = (string) => {
    let output = "";
    for (const char of string) {
      const charcode = BigInt(char.codePointAt());
      const saltcode = Number(this.encrypt(charcode));
      output += String.fromCodePoint(saltcode);
    }
    return output;
  };

  /**
   * RSA decrypt method.
   * @param {string} string Encrypted text.
   * @returns Plain text.
   */
  decode = (string) => {
    let output = "";
    for (const char of string) {
      const charcode = BigInt(char.charCodeAt());
      const saltcode = Number(this.decrypt(charcode));
      output += String.fromCodePoint(saltcode);
    }
    return output;
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

module.exports = RSA.singleton;
