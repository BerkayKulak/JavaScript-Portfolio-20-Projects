// variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["item 1", "item 2", "item 3", "item 4"];

// load items
loadItems();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);

  taskList.addEventListener("click", deleteItem);

  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
  items.forEach(function (item) {
    createItem(item);
  });
}

function createItem(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);

  taskList.appendChild(li);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("add a task");
  }

  createItem(input.value);

  input.value = "";

  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}

function deleteAllItems(e) {
  //
  //taskList.innerHTML = "";

  // while (taskList.firstChild) {
  //     taskList.removeChild(taskList.firstChild);
  // }

  if (confirm("are you sure")) {
    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }

  e.preventDefault();
}
