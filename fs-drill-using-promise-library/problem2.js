/*
    Problem 2:
    
    Using promises and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

import { error } from "console";

const {default : fs}=await import("fs/promises");

//         1. Read the given file lipsum.txt

export function readFile()
{
    fs.readFile("../lipsum.txt","utf-8")
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

//         2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

export function convertUpperCase()
{
    fs.readFile("../lipsum.txt","utf-8")
    .then((data)=>{
        fs.writeFile("../UppercaseFile.txt",data.toUpperCase())
        .then(()=>{
            console.log("Successfully File converted to UpperCase");
            
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
export function convertLowercase()
{
    fs.readFile("../UppercaseFile.txt","utf-8")
    .then((data)=>{
        const lowercaseData=data.toLowerCase();
        const splitdata=lowercaseData.split("\.").join(".\n");
        fs.writeFile("../Lowercase.txt",splitdata)
        .then(()=>{
            console.log("Successfully Content convert into lowercase and split");
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt

export function sortContent()
{
    fs.readFile("../Lowercase.txt","utf-8")
    .then((data)=>{
    
        const newSortData=data.split("\n").sort()
        fs.writeFile("../sortContent.txt",newSortData)
        .then(()=>{
            console.log("Successfully sort content");
            
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

export function deleteFile()
{
    fs.readFile("../sortContent.txt","utf-8")
    .then(()=>{
        console.log("File read successfully");
        fs.unlink("../Lowercase.txt")
        .then(()=>{console.log("Deleted Lowercase file")}).catch((err)=>{console.log(err)})
        fs.unlink("../UppercaseFile.txt")
        .then(()=>{console.log("Deleted Uppercasefie")}).catch((err)=>{console.log(err)})
        fs.unlink("../sortContent.txt")
        .then(()=>{console.log("Deleted sortcontent file")}).catch((err)=>{console.log(err)});
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default fs;