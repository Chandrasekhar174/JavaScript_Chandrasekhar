

// const btn1=document.getElementById("btn1");
// const btn2=document.getElementById("btn2");
// const btn3=document.getElementById("btn3");
// const btn4=document.getElementById("btn4");


// btn1.addEventListener("click",moveAll);
// btn2.addEventListener("click",moveSelected);
// btn3.addEventListener("click",moveSelected);
// btn4.addEventListener("click",moveAll);


function moveSelected(direction) {
    let fromList, toList;
    
    if (direction === "right") {
        fromList = document.getElementById("left-list");
        toList = document.getElementById("right-list");
    } else {
        fromList = document.getElementById("right-list");
        toList = document.getElementById("left-list");
    }

    let selectedItems = [...fromList.querySelectorAll("input:checked")];

    selectedItems.forEach(item => {
        let listItem = item.parentElement;
        item.checked = false; // Uncheck after moving
        toList.appendChild(listItem);
    });
}

function moveAll(direction) {
    let fromList, toList;
    
    if (direction === "right") {
        fromList = document.getElementById("left-list");
        toList = document.getElementById("right-list");
    } else {
        fromList = document.getElementById("right-list");
        toList = document.getElementById("left-list");
    }
    let allItems = [...fromList.children];
    allItems.forEach(item => {
        toList.appendChild(item);
    });
}
