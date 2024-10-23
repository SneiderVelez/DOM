class Elemento {
    constructor(elemento) {
        this.elemento = elemento;
    }

    cambiarColor(color) {
        this.elemento.style.backgroundColor = color;
    }
}

class Boton extends Elemento {
    constructor(elemento, boton) {
        super(elemento);
        this.boton = boton;
    }


    asignarEvento() {
        this.boton.addEventListener('click', () => {
            const color = '#3498db';  
            this.cambiarColor(color);
        });
    }
}

const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('colorBtn');

const botonCambioColor = new Boton(parrafo, boton);
botonCambioColor.asignarEvento();
