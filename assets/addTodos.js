const
    defaultEndPoint = "http://localhost:5000/api",
    title = document.querySelector('.task-title'),
    description = document.querySelector('.task-description'),
    addTodoButton = document.querySelector('.add-todo');

addTodoButton.onclick = async () => {

    const values = {
        title: title?.value,
        description: description?.value
    }

    try {
        
        const request = await fetch(`${defaultEndPoint}/todos`, {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const response = await request.json();

        if ( response?.message === "Added Successfully" ) {
            
            alert( response?.message );
            window.location.href = '/';
            return;
        }

        alert( response?.message );

    } catch (error) {
        
        console.log(error);

    }

};