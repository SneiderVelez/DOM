
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Administrador extends Usuario {
    mostrarMensaje() {
        return `Soy ${this.nombre}, tengo ${this.edad} años y soy Administrador.`;
    }
}

class Comercial extends Usuario {
    mostrarMensaje() {
        return `Soy ${this.nombre}, tengo ${this.edad} años y soy Comercial.`;
    }
}

const admin = new Administrador("Carlos", 35);
const comercial = new Comercial("Laura", 28);

const output = document.getElementById("output");
const adminBtn = document.getElementById("adminBtn");
const comercialBtn = document.getElementById("comercialBtn");

adminBtn.addEventListener("click", () => {
    output.textContent = admin.mostrarMensaje();
});

comercialBtn.addEventListener("click", () => {
    output.textContent = comercial.mostrarMensaje();
});
