/* Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs= require("fs");

for(let i=1;i<=10;i++)
{
    const file=`./JSON/file${i}.json`;
    fs.writeFile(file,`file${i}`,(err)=>{
        if(err)
        {
            console.log(err);
            
        }
        else{
            console.log("file created");
            
        }
    })
}



