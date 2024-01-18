document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const prioritySelect = document.getElementById('priority-select');

    const task = {
        name: taskInput.value,
        category: categorySelect.value,
        priority: prioritySelect.value
    };

    if (task.name.trim() === '') {
        alert('Please enter a valid task.');
        return;
    }

    displayTask(task);
    clearForm();
}

function displayTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        deleteTask(li);
    });

    li.innerHTML = `<span>${task.name} - ${task.category} (${task.priority})</span>`;
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

function deleteTask(taskElement) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(taskElement);
}

function clearForm() {
    document.getElementById('task-input').value = '';
}
