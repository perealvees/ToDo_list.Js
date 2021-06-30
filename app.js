//alert('Opa, rodou!') //aquela janelinha que abre de alerta//

//seleção de DOM

    const todoInput = document.querySelector('.todo-input')
    const todoButtom = document.querySelector('.todo-buttom')
    const todoList = document.querySelector('.todo-list')

    console.log(todoButtom)

//eventos de escutas
    todoButtom.addEventListener('click', addTodo)

//funções
    function addTodo(event) {
        event.preventDefault()

        const todoDiv = document.createElement('div')
        todoDiv.classList.add(Todo)

        const TodoLi = document.createElement
        TodoLi.classList.add('todo-list')
        todoLi.innerText = 'Jesus is'
        todoDiv.appendChild(todoLi)

        const completedButtom = document.createElement('buttom')
        completedButtom.innerHTML = '<i class="fas fa-check"></i>'
        completedButtom.classList.add('completed-btn')
        todoDiv.appendChild(completedButtom)

        const trashButtom = document.createElement('buttom')
        trasButtom.innerHTML = '<i class="fas fa-trash"></i>'
        trashButtom.classList.add('trash-btn')
        todoDiv.appendChild(trashButtom)

        todoList.appendChild(todoDiv)
    }    