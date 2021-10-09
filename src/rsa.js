const binpow = require("../bin/binpow");
const bingcd = require("../bin/bingcd");
const range = require("../bin/range");
const atkin = require("../bin/atkin");

/**
 * Implements RSA(Rivest–Shamir–Adleman) public-key cryptosystem.
 */
module.exports = class RSA {
  #primes;

  /**
   * Creates an instance on RSA class.
   * @param {object} options RSA options.
   * @param {number} options.bytes
   */
  constructor({ bytes }) {
    this.#primes = atkin(1 << bytes);
    this.initialize();
  }

  initialize = () => {
    // this.p = this.#primes[range(3, this.#primes.length - 1)];
    // this.q = this.#primes[range(3, this.#primes.length - 1)];
    this.p = 11;
    this.q = 3;
    this.n = this.p * this.q;
    this.phi = (this.p - 1) * (this.q - 1);

    // Generating Public Key:
    const es = [];
    for (let e = 2; e < this.phi; e++) {
      // 'e' must be co-prime to 'phi' and smaller than 'phi':
      if (bingcd(e, this.phi) === 1) es.push(e);
    }
    this.e = es[0]; // TODO: remove [range(0, es.length - 1)] == [0]

    // Generating Private Key:
    const ds = [];
    for (let d = 2; d < this.phi; d++) {
      // 'd' such that it satisfies d * e = 1 + k * phi:
      if ((d * this.e) % this.phi === 1) ds.push(d);
    }
    this.d = ds[range(0, ds.length - 1)];
  };

  info = () => ({
    public: { n: this.n, e: this.e },
    private: { n: this.n, d: this.d },
  });

  encrypt = (plaintext = "") => {
    let fancytext = "";
    for (const char of plaintext) {
      const code = char.codePointAt();
      const salt = binpow(code, this.e) % this.n;
      fancytext += String.fromCodePoint(salt);
    }

    return fancytext;
  };

  decrypt = (fancytext = "") => {
    let plaintext = "";
    for (const char of fancytext) {
      const code = char.charCodeAt();
      const salt = binpow(code, this.d) % this.n;
      plaintext += String.fromCodePoint(salt);
    }

    return plaintext;
  };
};
