var tasks = [];

function addTask() {
    var taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    var task = {
        text: taskInput.value,
        done: false
    };

    tasks.push(task);
    taskInput.value = '';

    listTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    listTasks();
}

function listTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(function (task, index) {
        var li = document.createElement('li');
        li.innerHTML = '<input type="checkbox" onchange="toggleTask(' + index + ')" ' + (task.done ? 'checked' : '') + '> ' +
            task.text +
            ' <button onclick="removeTask(' + index + ')">Eliminar</button>';
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    listTasks();
}
