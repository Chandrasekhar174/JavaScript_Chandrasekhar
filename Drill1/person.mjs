export const arrayOfObjects = [
    { 
       id: 1, 
       name: 'Alice', 
       age: 30,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    { 
        id: 2, 
        name: 'Bob', 
        age: 25,
        email: 'bob@example.com',
        city: 'London',
        country: 'UK',
        hobbies: ['playing guitar', 'hiking'],
        isStudent: true
     },
     { 
        id: 3, 
        name: 'Charlie', 
        age: 35,
        email: 'charlie@example.com',
        city: 'Paris',
        country: 'France',
        hobbies: ['cooking', 'gardening'],
        isStudent: false
     },
     { 
        id: 4, 
        name: 'David', 
        age: 28,
        email: 'david@example.com',
        city: 'Berlin',
        country: 'Germany',
        hobbies: ['photography', 'traveling'],
        isStudent: true
     },
     { 
        id: 5, 
        name: 'Eve', 
        age: 32,
        email: 'eve@example.com',
        city: 'Sydney',
        country: 'Australia',
        hobbies: ['yoga', 'surfing'],
        isStudent: false
     },
     { 
        id: 6, 
        name: 'Frank', 
        age: 33,
        email: 'frank@example.com',
        city: 'Los Angeles',
        country: 'USA',
        hobbies: ['playing basketball', 'reading'],
        isStudent: true
     },
     { 
        id: 7, 
        name: 'Grace', 
        age: 29,
        email: 'grace@example.com',
        city: 'Toronto',
        country: 'Canada',
        hobbies: ['painting', 'running'],
        isStudent: false
     },
     {  
        id: 8, 
        name: 'Hannah', 
        age: 31,
        email: 'hannah@example.com',
        city: 'Melbourne',
        country: 'Australia',
        hobbies: ['writing', 'knitting'],
        isStudent: true
     },
     { 
        id: 9, 
        name: 'Ivy', 
        age: 27,
        email: 'ivy@example.com',
        city: 'Tokyo',
        country: 'Japan',
        hobbies: ['playing piano', 'cooking'],
        isStudent: false
     },
     { 
        id: 10, 
        name: 'Jack', 
        age: 34,
        email: 'jack@example.com',
        city: 'Mumbai',
        country: 'India',
        hobbies: ['playing cricket', 'watching movies'],
        isStudent: true
     }
   ];
//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getEmailId(object)
{
   var i=0;
   var obj=[];
   if(object=="" || object ==null )
   {
     return null;
   }
   while(i<object.length)
   {
        obj.push(object[i].email);
        // console.log(obj);
        i++;
   }
   return obj;
}


//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function getAge(object,age)
{
    var i=0;
    var arr=[];
    if(object=="" || object ==null  || age==null)
    {
        return null;
    }
    while(i<object.length)
    {
        if(age===object[i].age)
        {
            arr.push(object[i].hobbies);
        }
        i++;
    }
    return arr;
}

// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function getName(object)
{
    var i=0;
    var arr=[];
    if(object==" " || object ==null)
    {
        return null;
    }
    while(i<object.length)
    {
        if(object[i].isStudent && object[i].country==="Australia")
        {
            arr.push(object[i].name);
        }
        i++;
    }
    return arr;

}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function getNameandCity(object)
{
    var i=0;
    var arr=[];
    if(object=="" || object ==null)
    {
        return null;
    }
    while(i<object.length)
    {
        if(i===3)
        {
            arr.push("name: " + object[i].name);
            arr.push("city: " + object[i].city);
        }
        i++;

    }
    return arr;
}

//    Implement a loop to access and print the ages of all individuals in the dataset.

function getAllAge(object)
{
    var i=0;
    var arr=[];
    if(object==" " || object ==null)
    {
        return null;
    }
    while(i<object.length)
    {
        arr.push(object[i].age);
        i++;
    }
    return arr;
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function getFirstHobby(obj)
{
    var i=0;
    var arr=[];
    if(obj==" " || obj ==null)
    {
        return null;
    }
    while(i<obj.length)
    {
        arr.push(obj[i].hobbies[0]);
        i++;
    }
    return arr;

}


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function getNameandEmail(object)
{
    var i=0;
    var arr=[];
    if(object==" " || object ==null)
    {
        return null;
    }
    while(i<object.length)
    {
        if(object[i].age===25)
        {
            arr.push("name: " + object[i].name);
            arr.push("email: "+ object[i].email);
        }
        i++;
    }
    return arr;
}

//    Implement a loop to access and log the city and country of each individual in the dataset.

function getCityandCountry(obj)
{
    var i=0;
    var arr=[];
    if(obj==" " || obj ==null)
    {
        return null;
    }
    while(i<obj.length)
    {
        arr.push("city :"+ obj[i].city);
        arr.push("country :"+ obj[i].country);
        i++;
    }
    return arr;
}

export{
    getEmailId,
    getAge,
    getName,
    getNameandCity,
    getAllAge,
    getFirstHobby,
    getNameandEmail,
    getCityandCountry
}
