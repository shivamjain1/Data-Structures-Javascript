/* 
    Build a Promise from scratch
*/

class SimplePromise {
  constructor(callback) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    callback(this.onResolve, this.onReject);
  }

  then(success) {
    this.promiseChain.push(success);
    return this;
  }

  catch(error) {
    this.handleError = error;
    return this;
  }

  onResolve(value) {
    let storedValue = value;
    try {
      this.promiseChain.forEach((next) => {
        storedValue = next(value);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

let promise = new SimplePromise((resolver, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6);
    if (rand > 2) {
      resolver("Success");
    } else {
      reject("Error");
    }
  }, 1000);
});

promise
  .then(function (response) {
    return response;
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
