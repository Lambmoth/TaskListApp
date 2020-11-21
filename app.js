//Selectors
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');

//Event Listeners
    taskButton.addEventListener('click', addTask);

//Functions

function addTask(event){
    //Prevent form from submitting
    event.preventDefault();
    console.log('hello');
    //Task Div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    //Create LI
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-btn");
    taskDiv.appendChild(deleteButton);
    //APPEND TO LIST
    taskList.appendChild(taskDiv);
    //Clear task input text
    taskInput.value = "";
}