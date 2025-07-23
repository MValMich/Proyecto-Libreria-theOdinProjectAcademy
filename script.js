// JS: Proyecto-Libreria
const formulario = document.querySelector('#formulario');
const dialog = document.querySelector('dialog');
const idTitulo = document.querySelector('#id-titulo');
const idAutor = document.querySelector('#id-autor');
const idPaginas = document.querySelector('#id-paginas');
const idLeido = document.querySelector('#id-leido');
const formBtn = document.querySelector('#form-btn');
const container = document.querySelector('#container');
const miLibreria = [];

function Libro(titulo, autor, paginas, leido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido ? 'Leído' : 'No leído';
    this.info = function() {
        return 'Título: ' + this.titulo + ' / ' +' Autor: ' + this.autor + ' / ' +' Páginas: ' + this.paginas + ' / ' +' Estado: ' + this.leido;
    };
}

function añadirLibroLibreia() {
    const titulo = idTitulo.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    const autor = idAutor.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    const paginas = idPaginas.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    const leido = idLeido.checked.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    const nuevoLibro = new Libro(titulo, autor, paginas, leido);
    miLibreria.push(nuevoLibro);
    mostrarLibroPatalla(nuevoLibro);
}

// FORMULARIO
function desplegarFormulario() {
    formBtn.addEventListener('click', () => {
        dialog.showModal();
    });
}
desplegarFormulario();
'Subir'
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    añadirLibroLibreia();
    dialog.close();
});
'Cerrar'
const cerrarBtn = document.querySelector('#cerrar-btn')
cerrarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
});

// CREAR NUEVO LIBRO
function mostrarLibroPatalla(libro) {
    const content = document.createElement('div');
    content.classList.add('class-content');
    content.textContent = libro.info();
    container.appendChild(content);

    const borrarLibroBtn = document.createElement('button')
    borrarLibroBtn.classList.add('borrar-btn')
    borrarLibroBtn.textContent = 'Borrar'
    content.appendChild(borrarLibroBtn);
    'borrar'
 borrarLibroBtn.addEventListener('click', () => {
        container.removeChild(content);
    });
}