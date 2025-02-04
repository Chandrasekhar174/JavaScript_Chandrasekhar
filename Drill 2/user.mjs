 export const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
};

// Q1 Find all users who are interested in playing video games.

function getUserInterested(object){
    var arr=[];
    for(let keys in object)
    {

        let inters=object[keys].interests;
        for(let inter of inters)
        {
            if(inter.toLowerCase()=="video games" || inter.toLowerCase()=="playing video games")
            {
                arr.push(keys);
                break;
            }
        }
    }
    return arr;
}


// Q2 Find all users staying in Germany.

function findUserGermany(obj)
{
    var arr=[];
    for(let key in obj)
    {
        if(obj[key].nationality=="Germany")
        {
            arr.push(key);
        }
    }
    return arr;
}

// Q3 Find all users with masters Degree.

function getUserwithMasterDegree(obj)
{
    var arr=[];
    for(let user in obj)
    {
        if(obj[user].qualification=="Masters")
        {
            arr.push(user);
        }
    }
    return arr;
}
// console.log(Object.keys(users).length);

// Q4 Group users based on their Programming language mentioned in their designation.


function gropBydesignation(object){

   let getDesignation ={};
   for(let user in users)
    {
        let desgination=users[user].desgination;
        if(!getDesignation[desgination])
        {
            getDesignation[desgination]={};
        }
        getDesignation[desgination]=users[user];
    } 
    return getDesignation;
}

export{
    getUserInterested,
    findUserGermany,
    getUserwithMasterDegree,
    gropBydesignation
};