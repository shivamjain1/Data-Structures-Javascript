/* 
    Implement a bind and reduce
*/

// bind

if (!Function.prototype.mybind) {
  Function.prototype.mybind = function () {
    const func = this;
    const context = arguments[0];
    const params = [...arguments].slice(1);

    if(typeof func !== 'function'){
        throw new TypeError('Not a valid function');
    }
    return function () {
      const args = [...params, ...arguments];
      func.apply(context, args);
    };
  };
}

// user = {
//   name: "Shivam",
//   print: function (data) {
//     console.log(this.name, data);
//   },
// };

// func = user.name.mybind(user);
// func("jain");

// setTimeout(user.print.mybind(user, "jain"), 1000);

// reduce
if(!Array.prototype.myreduce){
    Array.prototype.myreduce = function(callback, initialValue){
        if(this === null || this === undefined){
            throw new TypeError('myreduce called on null or undefined');
        }

        if(!callback || typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function`);
        }

        if(!this.length){
            if(arguments.length < 2){
                throw new TypeError('Reduce of empty array with no initial value');
            } else if(arguments.length === 2){
                return initialValue;
            }
        }

        let acc = initialValue;
        let index = 0;

        if(arguments.length < 2){
            acc = this[index++];
        }

        while(index < this.length){
            acc = callback(acc, this[index], index, this);
            index++;
        }

        return acc;
    }
}

arr=[1,2,3,4,5];
function sum(acc, current, index, arr){
    console.log(acc, current, index, arr);
    return acc+current;
}
console.log([].myreduce(sum));       // Reduce of empty array with no initial value
console.log([].myreduce());         // undefined is not a function
console.log(arr.myreduce(sum))
