/* Flatten an deeply Nested Object */

const obj = {
    level1: {
      level2: {
        level3: {
          more: 'stuff', 
          other: 'otherz',
          level4: {
            the: 'end',
          },
        },
      },
      level2still: {
        last: 'one',
      },
      am: 'bored',
    },
    more: 'what',
    ipsum: {
      lorem: 'latin',
    },
  };

  function flattenObject(obj, parent){
      for(let key in obj){
          let objKey = `${parent}.${key}`;
          if(typeof obj[key] === 'object'){
              flattenObject(obj[key], objKey)
          } else {
            flattenedObject[objKey] = obj[key];
          }
      }
  }

  let flattenedObject = {};
  const result = flattenObject(obj, "obj");
  console.log(flattenedObject);