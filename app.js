const input = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

LoadEventListeners();

function LoadEventListeners(){
    form.addEventListener("submit", submitClick);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
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

function removeTask(e){

    if (e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
          e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}