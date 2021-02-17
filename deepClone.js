/* 
    Implement function to deep clone an object
*/

var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer', add: {city: 'noida', pin: '2001'} };

/* var obj = employeeDetailsOriginal;

obj.name = 'changed'; */

function cloneDeep(obj){
	const temp = {};
   if (obj === null || typeof obj !== 'object') {
     return obj;
  }
	for(let key in obj){
  		temp[key] = cloneDeep(obj[key]);
  }
  
  return temp;
}

const obj = cloneDeep(employeeDetailsOriginal);
obj.name = 'changed';
obj.add.city = 'gzb';

console.log(obj);
console.log(employeeDetailsOriginal);