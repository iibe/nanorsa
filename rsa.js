"use strict";

const atkin = require("./bin/atkin");
const binpow = require("./bin/binpow");
const bingcd = require("./bin/bingcd");
const range = require("./bin/range");

module.exports = class RSA {
  #primes;

  /**
   * Creates an instance of RSA class.
   * @param {object} options Option list.
   * @param {number} options.bytes
   */
  constructor({ bytes }) {
    this.#primes = atkin(1 << bytes);
    this.p = this.#primes[range(3, this.#primes.length - 1)];
    this.q = this.#primes[range(3, this.#primes.length - 1)];
    this.n = this.p * this.q;
    this.phi = (this.p - 1) * (this.q - 1);
    this.e = null;
    this.d = null;
    this.initialize();
  }

  initialize = () => {
    // Generating Public Key:
    const es = [];
    for (let e = 2; e < this.phi; e++) {
      // a) 'e' must be smaller than 'phi'
      // b) 'e' must be co-prime to 'phi'
      if (bingcd(e, this.phi) === 1) es.push(e);
    }
    this.e = es[range(0, es.length - 1)];

    // Generating Private Key:
    const ds = [];
    for (let d = 2; d < this.phi; d++) {
      // 'd' such that it satisfies d * e = 1 + phi:
      if ((d * this.e) % this.phi === 1) ds.push(d);
    }
    this.d = ds[range(0, ds.length - 1)];
  };

  /**
   * RSA encrypt method.
   * @param {string} input Plain text.
   * @returns Encrypted text.
   */
  encrypt = (input) => {
    let output = "";
    for (const char of input) {
      const charcode = char.codePointAt();
      const saltcode = binpow(charcode, this.e) % this.n;
      output += String.fromCodePoint(saltcode);
    }

    return output;
  };

  /**
   * RSA decrypt method.
   * @param {string} input Encrypted text.
   * @returns Plain text.
   */
  decrypt = (input) => {
    let output = "";
    for (const char of input) {
      const charcode = char.charCodeAt();
      const saltcode = binpow(charcode, this.d) % this.n;
      output += String.fromCodePoint(saltcode);
    }

    return output;
  };

  get keys() {
    return {
      publicKey: { e: this.e, n: this.n },
      privateKey: { d: this.d, n: this.n },
    };
  }

  get info() {
    return {
      p,
      q,
      n,
      phi,
    };
  }
};
