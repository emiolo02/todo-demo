let todoList = document.getElementById("todoList");
let doneList = document.getElementById("doneList");
let todoInput = document.getElementById("todoInput");
let todoButton = document.getElementById("todoButton");
let todoItems = document.getElementsByClassName("todoItemContainer");

function addItem(itemName, itemLocation) {
  let itemCont = document.createElement("div");
  itemCont.className = "todoItemContainer";
  itemLocation.appendChild(itemCont);

  let itemText = document.createElement("p");
  itemText.textContent = itemName;
  itemCont.appendChild(itemText);

  let removeButton = document.createElement("button");
  removeButton.className = "todoRemoveButton";
  removeButton.id =
    "todoRemoveButton" + "_" + (todoItems.length - 1).toString();

  removeButton.textContent = "X";
  itemCont.appendChild(removeButton);

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkBox";
  checkBox.id = "checkBox" + "_" + (todoItems.length - 1).toString();
  itemCont.appendChild(checkBox);
}

todoButton.onclick = () => {
  if (todoInput.value.length > 0) addItem(todoInput.value, todoList);

  todoInput.value = "";
};

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "todoRemoveButton") {
    let index = String(e.target.id).split("_").pop();
    parseInt(index, 10);
    todoList.removeChild(todoList.childNodes[index]);

    updateClassArr("todoRemoveButton", "todoRemoveButton");
    updateClassArr("checkBox", "checkBox");
  } else if (e.target && e.target.className == "checkBox") {
    if (e.target.checked) {
      let index = String(e.target.id).split("_").pop();
      parseInt(index, 10);

      doneList.appendChild(todoItems[index]);
      updateClassArr("todoRemoveButton", "todoRemoveButton");
      updateClassArr("checkBox", "checkBox");
    } else if (!e.target.checked) {
      let index = String(e.target.id).split("_").pop();
      parseInt(index, 10);

      todoList.appendChild(todoItems[index]);
      updateClassArr("todoRemoveButton", "todoRemoveButton");
      updateClassArr("checkBox", "checkBox");
    }
  }
});

function updateClassArr(className, idName) {
  let classArr = document.getElementsByClassName(className);
  for (let i = 0; i < classArr.length; i++) {
    classArr[i].id = idName + "_" + String(i);
  }
}
