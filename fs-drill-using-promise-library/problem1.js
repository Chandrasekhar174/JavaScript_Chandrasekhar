const {default: fs}=await import("fs/promises")
/* Problem 1:
    
    Using promises and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

export function createDirwithFile()
{
    fs.mkdir("../JSONFile")
    .then(()=>{
        console.log("file created successfully");
        for(let i=1;i<=10;i++)
        {
           fs.writeFile(`../JSONFile/file${i}.json`,`This is file${i}`)
           .then(()=>{
            console.log(`File${i} Created `);
            
           })
           .catch((err)=>{
            console.log(err);
           })
        }
    })
    .catch((err)=>{
        console.log(err);
        return;
    })
}

export function deleteFile()
{

   for(let i=1;i<=10;i++)
   {
        fs.unlink(`../JSONFile/file${i}.json`)
        .then(()=>{
            console.log(`file${i} deleted successfully`);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
   }
   
}

export default fs;
