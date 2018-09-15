module.exports = function longestConsecutiveLength(array) {
  let s = new Set(array);
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (s.has(elem - 1) === false) {
      let count = 1;
      while (s.has(elem + 1)) {
        count++;
        elem++;
      }
      if (count > result) result = count;
    }
  }
  return result;
};
