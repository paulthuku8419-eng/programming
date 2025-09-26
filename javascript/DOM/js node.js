document.getElementById("todoform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const todoinput=document.getElementById("todoinput");
    const todotext=todoinput.ariaValueMax.trim();
    if (todotext !== ""){
        addTodoItem(todotext);
        todoinput.value="";
    }
});
function addTodoItem(text) {
    const todoList = document.getElementById("todolist");
    const li=document.createElement("li");
}

//checkbox
const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.addEventListener("change",function(){
    li.classList.toggle("completed",checkbox.checked);});

    //task text
const taskText=document.createElement("span");
taskText.textcontent="text";

//delete button
const deleteButton=document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.addEventListener("click",function(){
    li.remove();
});
li.appendChild(checkbox);
li.appendChild(taskText);
li.appendChild(deleteButton);
document.getElementById("todolist").appendChild(li);

todoList.appendChild(li);

