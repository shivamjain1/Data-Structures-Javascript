let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]

function flatten(arr) {
    return arr.reduce(function(acc, next){
      let isArray =  Array.isArray(next)
      return acc.concat(isArray ? flatten(next) : next)
    }, [])
}

Array.prototype.flatten = function(){
	return flatten(this);
};

console.log(arr.flatten());

/* Array Flat with depth d */

function flatten(arr, d=0) {
    return d>0 ? arr.reduce(function(acc, next){
      let isArray =  Array.isArray(next)
      return acc.concat(isArray ? flatten(next, d-1) : next)
    }, []) : arr.slice();
}
Array.prototype.flatten = function(d){
	return flatten(this, d);
};
console.log(arr.flatten(2));