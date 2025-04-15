const todoForm = document.getElementById('todo-form');
const todosList = document.getElementById('todos');


function showTodos() {
    // fetch('http://localhost:5000/api/todos', {
        fetch('https://nodejs25.vercel.app/api/todos', {
        method: 'GET'
    }).then(res => res.json())
        .then(json => {
            todosList.textContent = ''; // Clears the table body
            const todos = json.data;
            todos.forEach(todo => {
                const tr = document.createElement('tr');

                const col1 = document.createElement('td');
                col1.textContent = todo.title;
                tr.appendChild(col1);

                const col2 = document.createElement('td');
                col2.textContent = todo.completed;
                tr.appendChild(col2);

                const col3 = document.createElement('td');
                col3.innerHTML = `<button data-id="${todo._id}">Mark completed</button>`;
                tr.appendChild(col3);

                todosList.appendChild(tr);
            })
        });

}

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newToDo = event.target.firstElementChild.value;
    let toDo;
    if(newToDo !== '') {
        toDo = {title: newToDo};
        // fetch('http://localhost:5000/api/todos', {
        fetch('https://nodejs25.vercel.app/api/todos', {
            method: 'POST',
            body: JSON.stringify(toDo),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(res => showTodos);
    }
});
window.addEventListener('DOMContentLoaded', showTodos);
