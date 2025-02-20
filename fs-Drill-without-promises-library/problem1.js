const {default:fs}=await import("fs");


function promiseForReadFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })   
}

function promiseForWritefile(filepath,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,data,(err,value)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(value);
            }
        })
    })

}
function promiseForAppendfile(filePath,data)
{
    return new Promise((resolve,reject)=>{
        fs.appendFile(filePath,data,(err)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("File appended successfully");
            }
        })
    })
}

function promiseForDeletefile(filePath)
{
    return new Promise((resolve,reject)=>{
        fs.unlink(filePath,(err)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("File deleted successfully");
            }
        })
    })
}
function promiseForSplitContent(filePath,splitBase)
{
    return new Promise((resolve,reject)=>{
        promiseForReadFile(filePath).then((data)=>{    //call function for readfile 
            return data.split(splitBase).join(".");    // return data with split
        }).catch((err)=>reject(err))
        .then((data)=>{                              
            return promiseForWritefile(filePath,data)   //again call function for writefile
        }).catch((data)=>reject(arr))
        .then((data)=>{resolve(data)}).catch((err)=>reject(err)); //after that it will resolve or incase of err reject.
    })
}
promiseForSplitContent("../abc.txt","\.").then((val)=>{console.log("Split successfully")}).catch(err=>console.log(err));