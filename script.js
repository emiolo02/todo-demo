let todoList = document.getElementById('todoList')
let todoInput = document.getElementById('todoInput')
let todoButton = document.getElementById('todoButton')

function addItem(itemName, itemLocation){
    let itemCont = document.createElement('div')
    itemCont.className = 'itemContainer'
    itemLocation.appendChild(itemCont)

    let itemText = document.createElement('p')
    itemText.textContent = itemName
    itemCont.appendChild(itemText)
}

todoButton.onclick = () =>{
    addItem(todoInput.value, todoList)
}