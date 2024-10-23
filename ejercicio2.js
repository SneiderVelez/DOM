class ListaTareas {
    constructor() {
        this.tareas = [];
        this.id = 0; 
    }

    agregarTarea(tarea) {
        if (tarea) {
            const li = document.createElement('li');
            li.textContent = tarea;
            document.getElementById('listaTareas').appendChild(li);
        } else {
            alert('Por favor, escribe una tarea');
        }
    }
}

const listaTareas = new ListaTareas();
const inputTarea = document.getElementById('tareaInput');
const agregarBtn = document.getElementById('agregarBtn');

agregarBtn.addEventListener('click', () => {
    const tarea = inputTarea.value.trim();
    listaTareas.agregarTarea(tarea);    
    inputTarea.value = ''; 
});
