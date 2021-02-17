/* 
    You have skills array convert it into the below result
*/

var skillsArray = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

/* 
    Result:
    [
        { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
        { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
        { skill: 'html', user: [ 'Sue' ], count: 1 } 
    ]
*/

function groupBySkill() {
  let key = {};
  for (let obj of skillsArray) {
    if (!key[obj.skill]) {
      key[obj.skill] = {
        skill: obj.skill,
        user: [],
        count: 0,
      };
    }
    key[obj.skill] = {
      ...key[obj.skill],
      user: [...key[obj.skill].user, obj.user],
      count: key[obj.skill].count + 1,
    };
  }

  return Object.values(key).sort((a,b) => b.count - a.count);
}

const res = groupBySkill(skillsArray);
console.log(res);
