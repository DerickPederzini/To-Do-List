
const input = document.querySelector("#input-to-do");
const listContainer = document.querySelector("#taskContainer");

function addTask(){
    if(input.value === ''){
         alert("You didn't write anything.")
    }else{
        const list = document.createElement("li");
        list.innerHTML = input.value;
        listContainer.appendChild(list);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle('checked');
        saveData();
        
    }else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();