if (typeof Object.myassign !== "function") {
  Object.myassign = function (target, varArgs) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }

    let to = Object(target);
    for (i = 0; i < arguments.length; i++) {
      let next = arguments[i];
      if (next != null) {
        for (let nextKey in next) {
          if (Object.prototype.hasOwnProperty.call(next, nextKey)) {
            to[nextKey] = next[nextKey];
          }
        }
      }
    }
    return to;
  };
}

const a = { a: 1, b: 2 };
const b = { b: 5, c: 1 };

const copy = Object.myassign(a, b);

console.log(copy);
console.log(a);
