// VALIDACION DE FORMULARIO DE CONTACTO 
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

// El Evento de Submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }

    //Crear la alerta de enviar correctamente
    //Enviar el formulario
    mostrarAlerta('Enviando Formulario');
})


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}