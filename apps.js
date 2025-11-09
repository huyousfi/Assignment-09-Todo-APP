
const input = document.querySelector("#input");
const ol =document.querySelector("#ol");


const allTodos = [];

function renderTodo(){
    ol.innerHTML = " "
    for(let i = 0; i < allTodos.length; i++){
        ol.innerHTML += `<li>${allTodos[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="doneTodo(${i})">Done</button>
        </li>`
    }
}

function addTodo(){
    console.log(input.value);
    allTodos.push(input.value.trim());
    renderTodo()

    input.value = " "

}

function deleteTodo(index){
    console.log ("Todo Deleted" , index);
    allTodos.splice(index , 1)
     
    renderTodo()
}
function editTodo(index){
    console.log("Todo Edidted" , index);
    const updatedVal = prompt("Enter updated value" , allTodos[index])
    allTodos.splice(index , 1 , updatedVal)

    renderTodo()
}

function markDone(index){
    allTodos[index].done = !allTodos[index].done;
    renderTodo();
}

