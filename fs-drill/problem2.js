/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs=require("fs");

function readFile()
{
    fs.readFile("../lipsum.txt","utf-8",(err,value)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(value);
        }
    })
}
// console.log(readFile());
function convertToUpperCaseFile()
{
   fs.readFile("../lipsum.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    const uppercasedata=data.toLocaleUpperCase();
    // console.log(uppercasedata);
    fs.writeFile("../filenames.txt",uppercasedata,(err,value)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("file converted");
        
    })
   })
}
// convertToUpperCaseFile();

// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt

function convertToLowerCase()
{
    fs.readFile("../filenames.txt","utf-8",(err,data)=>{
        if(err)
        {
            console.log(err); 
        }
        const lowercaseData=data.toLocaleLowerCase();
        // console.log(lowercaseData);
        const regex=/\./;
        const splitdata=lowercaseData.split(regex).join(".\n");
        fs.writeFile("../lowercaseFile.txt",splitdata.toString(),(err)=>{
            if(err)
            {
                console.log(err);
            }
            console.log("successfully file converted into lowercase");
        })
    })
}
// console.log(convertToLowerCase());
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt

function sortContent()
{
    fs.readFile("../filenames.txt","utf-8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        const newData=data;
        const regex=/\./;
        const newDatas=newData.split(regex).sort().join("\n");
        fs.writeFile("../filenames1.txt",newDatas.toString(),(err)=>{
            if(err)
            {
                console.log(err);
            }
            console.log("successfully sort content");
        })
    })
}
// sortContent();


// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

function deleteFile()
{
    
    fs.readFile("../filenames1.txt","utf-8",(err)=>{
        if(err)
        {
            console.log(err);
        }    
        else{
            fs.unlink("../filenames1.txt",(err,value)=>{
                if(err)
                {
                    console.log(err);
                    
                }
                else{
                    console.log("Deleted file");
                    
                }
            })
        }
    })
}

// deleteFile();

module.exports={readFile,convertToLowerCase,convertToUpperCaseFile,sortContent,deleteFile};
// const regex=/\./g
// const st="hello. it. is. is. very. very."
// const newSt=st.replace(regex,"\n");
// console.log(st);
// console.log(newSt);
// const regex=/\ /g;
// const st="cb hsc hsc chs c hsbcs cshc sncbcsh h  shcbs c sh c c h"
// const newStr=st.split(regex).sort();
// console.log(newStr.sort());


