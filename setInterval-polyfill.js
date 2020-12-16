function createSetIntervalPolyfill() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(func, delay = 0, ...args) {
    if (typeof func !== "function")
      throw new TypeError('"callback" must be a function');

    let uniqueId = intervalId++;

    function repeat() {
      intervalMap[uniqueId] = setTimeout(() => {
        func(...args);

        // terminating condition
        if (intervalMap[uniqueId]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return uniqueId;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const {
  setIntervalPolyfill,
  clearIntervalPolyfill,
} = createSetIntervalPolyfill();

/* console.log(first(), second()) */

var counter = 0;
function greet(name) {
  counter++;
  console.log(`Hello ${name}`);
  if (counter >= 3) {
    clearIntervalPolyfill(intervalId);
  }
}

const intervalId = setIntervalPolyfill(greet, 1000, "Shivam");
/* 
setTimeout(()=>{
  clearInterval(intervalId);
}, 3000) */
