// const { default: fs } = await import("fs/promises")
/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


function simplePromise1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },10000)
    })
}
console.log("Program started");
simplePromise1().then(()=>{
    console.log("Program complete");
});
console.log("Program in progress...");
