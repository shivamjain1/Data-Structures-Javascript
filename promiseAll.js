/* 
    Implement your own promise.All() method
*/

const promiseAll = (promises) => {
  let results = [],
    compeleted = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          compeleted++;
          if (promises.length === compeleted) {
            resolve(results);
          }
        })
        .catch((e) => reject(e));
    });
  });
};

const asyncOperation = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const promisesToMake = [
  asyncOperation(2000),
  asyncOperation(1000),
  asyncOperation(3000),
];
const promises = promiseAll(promisesToMake);
promises.then((results) => {
  console.log(results);
});
