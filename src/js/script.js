const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('todos');

// Função para carregar tarefas do localStorage ao carregar a página
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => createTaskElement(task));
}

// Função para salvar tarefas no localStorage
function saveTasks(task) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

// Função para criar os elementos das tarefas
function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Cria o texto da tarefa
    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    // Cria o contêiner para os botões (editar e excluir)
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Cria o botão de editar
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => editTask(task.id, taskText));

    // Cria o botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(task.id, li));

    // Adiciona os botões ao contêiner
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    // Adiciona ao DOM
    li.appendChild(taskText);
    li.appendChild(taskActions);

    taskList.appendChild(li); // Adiciona o <li> à lista de tarefas (<ul>)
}

// Função para adicionar tarefas
function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please, input a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
    };

    createTaskElement(task); // Cria o elemento visual
    saveTasks(task); // Salva no localStorage
    taskInput.value = ''; // Limpa o campo de entrada
}

// Função para editar a tarefa
function editTask(taskId, taskTextElement) {
    // Salva o texto original antes da edição
    const originalText = taskTextElement.textContent;

    // Cria um campo de entrada para editar o texto
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = originalText;  // Coloca o texto atual da tarefa no campo de entrada
    inputField.classList.add('edit-input'); // Classe para estilizar

    // Substitui o texto atual pelo campo de entrada
    taskTextElement.replaceWith(inputField);

    // Foco automático no campo de entrada
    inputField.focus();

    // Adiciona um evento para salvar quando o usuário pressionar "Enter" ou sair do campo
    inputField.addEventListener('blur', () => saveEdit(taskId, inputField, originalText, taskTextElement));
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveEdit(taskId, inputField, originalText, taskTextElement);
        }
    });
}

// Função para salvar a task editada
function saveEdit(taskId, inputField, originalText, taskTextElement) {
    const newText = inputField.value.trim();

    // Se o campo estiver vazio, restaura o texto original
    if (!newText) {
        // Cria o texto novamente a partir do original
        const restoredTextElement = document.createElement('span');
        restoredTextElement.textContent = originalText;

        // Substitui o campo de entrada pelo texto restaurado
        inputField.replaceWith(restoredTextElement);

        // Recupera o botão de editar existente e associa o evento novamente
        const editButton = restoredTextElement.parentElement.querySelector('.edit-btn');
        editButton.addEventListener('click', () => editTask(taskId, restoredTextElement));

        return;
    }

    // Se o texto não estiver vazio, salva a alteração e atualiza o localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.map((task) => {
        if (task.id === taskId) {
            task.text = newText; // Atualiza o texto da tarefa
        }
        return task;
    });

    // Salva as tarefas atualizadas no localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Cria o novo elemento de texto
    const updatedTextElement = document.createElement('span');
    updatedTextElement.textContent = newText;

    // Substitui o campo de entrada pelo texto atualizado
    inputField.replaceWith(updatedTextElement);

    // Recupera o botão de editar existente e associa o evento novamente
    const editButton = updatedTextElement.parentElement.querySelector('.edit-btn');
    editButton.addEventListener('click', () => editTask(taskId, updatedTextElement));
}

// Função para excluir uma tarefa
function deleteTask(taskId, taskElement) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    taskList.removeChild(taskElement); // Remover do DOM
}

// Quando o botão for clicado, ele vai chamar a função 'addTask'
addTaskButton.addEventListener("click", addTask);

// Carrega as tarefas ao abrir a página
loadTasks();