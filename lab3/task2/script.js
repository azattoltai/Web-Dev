const input = document.getElementById("toDoInput");
const addBtn = document.getElementById("addToDoButton");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", function() {
    if (input.value == "") return;

    const li = document.createElement("li")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = input.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done")
    });

    delBtn.addEventListener("click", function () {
        li.remove();
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";
})