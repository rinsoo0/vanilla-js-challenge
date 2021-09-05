const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")

const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDosa() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function paintToDo(newTodo) {


    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");

    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        li.remove();

        toDos = toDos.filter(item => item.id !== parseInt(li.id));

        saveToDosa();


    });

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {

    event.preventDefault();

    const newTodo = toDoInput.value;

    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDosa();

    toDoInput.value = "";
}


toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {

    const parsedToDos = JSON.parse(savedToDos);

    parsedToDos.forEach(item => {
        paintToDo(item);
    });

    toDos = parsedToDos;
}




