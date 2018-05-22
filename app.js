const input = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

LoadEventListeners();

function LoadEventListeners(){
    form.addEventListener("submit", submitClick);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
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

function filterTasks(e){
    const filterText = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const text = task.firstChild.textContent;
            console.log(task);
            if (text.toLowerCase().indexOf(filterText) != -1)
            {
                task.style.display = 'block'
            }
            else{
                task.style.display = 'none';
            }
        }
    )
}