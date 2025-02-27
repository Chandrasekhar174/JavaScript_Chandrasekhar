const lines=document.querySelectorAll(".line")
const circles=document.querySelectorAll(".circle")
const preVbtn=document.getElementById("previousBtn")
const nextbtn=document.getElementById("nextBtn")

// console.log(line);
// console.log(circle);
// console.log(preVbtn);
// console.log(nextbtn);

let currValue=1;

nextbtn.addEventListener("click",function(){
    currValue++;
    if(currValue>circles.length)
    {
        currValue=circles.length;
    }
    updateBlue(currValue);
});

preVbtn.addEventListener("click",function(){
    currValue--;
    if(currValue<1)
    {
        currValue=1;
    }
    updatePre(currValue);
});

function updateBlue(){
    circles[currValue-2].style.background="blue"
    lines[currValue-2].style.background="blue";
    if(currValue===circles.length)
    {
        circles[circles.length-1].style.background="blue";
    }
}
function updatePre(){
    circles[currValue].style.background=""
    lines[currValue-1].style.background="";
    if(currValue===1)
    {
        circles[0].style.background="";
    }
    
}





