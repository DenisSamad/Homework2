function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  function setCounterValue(value) {
    count = value;
  }

  function decreaseCounter() {
    return count--;
  }

  counter.set = setCounterValue;
  counter.decrease = decreaseCounter;

  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());

counter.set(10);
console.log(counter());

counter.decrease();

console.log(counter());
