module.exports = function range(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Parameters should be integers.");
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
