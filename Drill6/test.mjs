import * as utility from './closure.mjs'

const pl=utility.counterFactory();
pl.decrement();
pl.decrement();


function sayHello(name) {
    return `Hello, ${name}!`;
}

const limitedHello = utility.limitFunctionCallCount(sayHello, 3);

console.log(limitedHello("chandra")); 
console.log(limitedHello("sekhar"));   
console.log(limitedHello("prabhash")); 
console.log(limitedHello("rahul"));  






function add(a, b) {
    return a + b;
}


const cachedAdd = utility.cacheFunction(add);

console.log(cachedAdd(2, 3)); 
console.log(cachedAdd(2, 3)); 
console.log(cachedAdd(4, 5)); 
console.log(cachedAdd(4, 5)); 