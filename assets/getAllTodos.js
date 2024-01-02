const
    defaultEndPoint = "http://localhost:5000/api",
    todosWrapper = document.querySelector('.todo-list');


const createNewElement = ( id, title, description ) => {

    const TodosClassName = "todos";
    const titleClassName = "todos-title";
    const descriptionClassName = "todos-description";
    const elemetWrapper = "a";

    const anchor = document.createElement(elemetWrapper);
    const titleElement = document.createElement('p');
    const descriptionElement = document.createElement('p');

    anchor.classList.add(TodosClassName);
    titleElement.classList.add(titleClassName);
    descriptionElement.classList.add(descriptionClassName);

    anchor.href = `update-todo.html/${id}`;
    titleElement.textContent = title;
    description.textContent = description;

    anchor.append(titleElement);
    anchor.append(descriptionElement);
    todosWrapper.appendChild(anchor);
    return todosWrapper;

}

const getAllTodos = async () => {

    try {
        
        const request = await fetch(`${defaultEndPoint}/todos`, {
            method: "GET"
        });


        const response = await request.json();

        if ( response?.result ) {

            const data = response?.result;

            data.map( todo => {

                const { id, title, description } = todo;

                console.log(id)

                todosWrapper.innerHTML += `<li>
                    <a href=/update-todo.html/${id} class="todos"> <p class="todo-title">${title}</p> <p class="todo-description">${description}</p> </a>
                </li>`;

            })

        }

    } catch (error) {
        
        console.log(error);

    }

};

getAllTodos();