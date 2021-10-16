const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // This code is executed in the main thread and not in the worker:
  module.exports = function AsyncRSAEncode(data) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: data });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Stopped with #${code} exit code`));
        }
      });
    });
  };
} else {
  // This code is executed in the worker and not in the main thread:
  const mainThreadData = workerData;
  const rsa = require("../rsa");

  // Returns instantiated class
  parentPort.postMessage(rsa.key);
}
