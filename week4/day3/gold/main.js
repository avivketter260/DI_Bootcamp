// nalyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});//[2,4,6]


// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//[1,2,0,1,2,3]

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    // console.log(num, i);
    // alert(num);
    return num * 2;
})
// i is the index so the value change evrey loop

// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
const newArr=array.map((item,i)=>  i<3? item.join(''): item)
// console.log(newArr)

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const result= greeting.map((item,i)=>{
return item.join(' ')
})
// console.log(result.join(''))

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const answer = trapped.map((item,i)=>{
    return item.join('')
})
console.log(answer)