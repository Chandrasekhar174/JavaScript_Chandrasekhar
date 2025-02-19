/* Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs= require("fs");
const { findSourceMap } = require("module");

function createFolder()
{
  for(let i=1;i<=10;i++)
  {
    setTimeout(()=>{
        fs.mkdir("../JSON_Random",(err,successfully)=>{
            if(err)
            {
                console.log("ERROR :",err);
            }
            else{
                console.log("Successfully created ",successfully);
                
            }
        })
    },2000)
  }
}
function deleteDiroctory()
{
  setTimeout(()=>{
    fs.rmdir("../JSON_Random",(err)=>{
      if(err)
      {
        console.log(err);
      }
      else{
        console.log("Successfully Deleted");
        
      }
    })
  },3000)
}

module.exports={createFolder,deleteDiroctory};

