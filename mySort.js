/* 
    Implement your own sorting function.
*/

Array.prototype.mysort = function(){
	const input = this;
  function merge(left, right){
  	let results = [];
    
    while(left.length && right.length) {
    		if(left[0] < right[0]){
        		results.push(left.shift());
        } else {
        		results.push(right.shift());
        }
    }
      return [...results, ...left, ...right];
  }
  
  function mergeSort(input){
  	if(input.length <= 1) return input;
    const mid = Math.floor(input.length/2);
    
    const left = input.slice(0, mid);
    const right = input.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
  
    return mergeSort(input);
}

let arr = [1,2,,23,3,12,3,2,56];
console.log(arr.mysort());