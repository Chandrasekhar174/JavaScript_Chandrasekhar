const { resolve } = require("path/win32")

const {default: fs}=await import("fs")

/* Problem 1:
    
    Using promises and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

function createDir()
{
    fs.mkdir("./JSONFile",(err)=>{
        if(err)
        {
            resolve(err);
        }

    })
}