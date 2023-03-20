function sum(a) {
  let currentSum = a;

  function nextSum(b) {
    currentSum += b;
    return nextSum;
  }

  nextSum.valueOf = function () {
    return currentSum;
  };

  return nextSum;
}

console.log(sum(1)(2)());