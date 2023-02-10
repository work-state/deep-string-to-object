module.exports = function deepConvert(chain, value) {
  const accumulator = {};
  let holder = accumulator;
  chain.split(".").map((str, idx, arr) => {
    holder = holder[str] = idx == arr.length - 1 ? value : {};
  });

  return accumulator;
};
