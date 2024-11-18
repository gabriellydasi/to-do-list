<div align="center">
  
  # To-Do List 📋
</div>

Este é um projeto de Lista de Tarefas (To-Do List) desenvolvido em JavaScript. Ele usa localStorage para armazenar as tarefas de forma persistente e as mantém mesmo após o fechamento do navegador. A interface foi estilizada utilizando Tailwind CSS e CSS personalizado para criar um design moderno, responsivo e visualmente agradável.

## Funcionalidades
* **Adicionar Tarefas:** O usuário pode adicionar novas tarefas à lista.
* **Editar Tarefas:** O usuário pode editar uma tarefa existente.
* **Excluir Tarefas:** O usuário pode excluir uma tarefa da lista.
* **Persistência de Dados:** As tarefas são armazenadas no localStorage do navegador, garantindo que elas sejam carregadas ao recarregar a página.

## Estrutura do Código
O código é organizado da seguinte forma:
* **Função loadTasks():** Carrega as tarefas armazenadas no localStorage quando a página é carregada.
* **Função saveTasks(task):** Salva uma nova tarefa no localStorage.
* **Função createTaskElement(task):** Cria e exibe um item de tarefa na interface do usuário.
* **Função addTask():** Adiciona uma nova tarefa à lista e ao localStorage.
* **Função editTask(taskId, taskTextElement):** Permite editar o texto de uma tarefa.
* **Função saveEdit(taskId, inputField, originalText, taskTextElement):** Salva a edição feita em uma tarefa.
* **Função deleteTask(taskId, taskElement):** Remove uma tarefa do localStorage e da interface.

## Tecnologias Utilizadas
* **HTML:** Estrutura da página e dos elementos.
* **Tailwind CSS e CSS Personalizado:** A estilização visual foi feita utilizando a framework Tailwind CSS para garantir um layout responsivo e personalizável, juntamente com CSS personalizado para ajustes específicos e adições visuais ao design.
* **JavaScript:** Lógica de funcionamento, manipulação do DOM e armazenamento no localStorage.

## Imagens
![Captura de tela 2024-11-15 131437](https://github.com/user-attachments/assets/d9de1814-d583-4822-91fd-ef37c46ef814)
![Captura de tela 2024-11-15 131404](https://github.com/user-attachments/assets/067f1d20-94a3-4250-9291-29750d176aaf)

## Como Executar o Projeto
Clone este repositório:
```
https://github.com/gabriellydasi/to-do-list.git
```
Acesse o diretório do projeto:
```
cd to-do-list
```
Abra o arquivo `index.html` diretamente no seu navegador ou utilize uma extensão como <b>Live Server</b> no Visual Studio Code.

## Deploy
O projeto está disponível online no seguinte link:
<a href="https://to-dolist-beryl-seven.vercel.app/">Acessar Página</a>
