const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newToDo = event.target.firstElementChild.value;
    let toDo;
    if(newToDo !== '') {
        toDo = {title: newToDo};

        fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            body: JSON.stringify(toDo),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then(res => console.log(res.json()));
    }
});