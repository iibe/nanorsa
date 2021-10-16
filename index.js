const workerpool = require("workerpool");
const path = require("path");

const pool = workerpool.pool(path.join(__dirname, "./workerpool.js"));

const message = "Hello world";

pool
  .exec("rsaEncode", [message])
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .then(() => pool.terminate());

pool
  .exec("rsaDecode", [message])
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .then(() => pool.terminate());
