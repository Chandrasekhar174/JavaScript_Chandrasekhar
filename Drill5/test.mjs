import * as utility from './testobject.mjs'

console.log(utility.keys(utility.testObject));
// console.log(values(testObject));
console.log(utility.mapObject(utility.testObject,(values,key)=>values));
console.log(utility.pairs(utility.testObject));
console.log(utility.invert(utility.testObject));
const defaultProps = { name: "n1", age: 12, location: "odisha" ,salary:14999}; // use this object to test your functions
console.log(utility.defaults(utility.testObject,defaultProps));
