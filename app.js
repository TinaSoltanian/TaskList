const input = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

LoadEventListeners();

function LoadEventListeners(){
    form.addEventListener("submit", submitClick);
}


function submitClick(e){
    if (input.value === ""){
        alert("Enter task and try again");        
    }

    let li = document.createElement('li');
    li.className = "collection-item"
    li.appendChild(document.createTextNode(input.value));

    let a = document.createElement('a');
    a.className = "delete-item secondary-content";

    let i = document.createElement('i');
    i.className = "fa fa-remove";

    a.appendChild(i);

    li.appendChild(a);

    taskList.appendChild(li);
    input.value = "";

    e.preventDefault();
}