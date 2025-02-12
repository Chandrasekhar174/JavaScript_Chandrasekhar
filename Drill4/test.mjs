import * as utility from './item.mjs'


// utility.each(utility.items, (num, index) => {
//   console.log(`Element at index ${index}: ${num}`);
// });

// const getElement=utility.map(utility.items,(num)=>num);
// console.log(getElement);

// console.log(utility.reduce(utility.items,function(num){return num==3}));

const t=utility.filter(utility.items,num=>num>2);
console.log(t);
// console.log(utility.flatten(utility.nestedArray));
