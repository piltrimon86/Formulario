'use strict';

const formulario$3 = document.getElementById('formulario');

const validarCantidad = () => {
    // Se acepta cualquier dígito (0-9) y un punto con decimales (opcional)
    const expRegCantidad = /^\d+(\.\d+)?$/;

    // Obtenemos el input de cantidad
    const inputCantidad = formulario$3.cantidad;

    if (expRegCantidad.test(inputCantidad.value)) {
        inputCantidad.classList.remove('formulario__input--error');
        return true
    } else {
        inputCantidad.classList.add('formulario__input--error');
        return false
    }
};

const formulario$2 = document.getElementById('formulario');

const validarNombre = () => {
    const expRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    // Obtenemos el input de nombre
    const inputNombre = formulario$2['nombre-receptor'];

    if (expRegNombre.test(inputNombre.value)) {
        inputNombre.classList.remove('formulario__input--error');
        return true
    } else {
        inputNombre.classList.add('formulario__input--error');
        return false
    }
};

const formulario$1 = document.getElementById('formulario');

const validarCorreo = () => {
    const expRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Obtenemos el input de correo
    const inputCorreo = formulario$1['correo-receptor'];

    if (expRegCorreo.test(inputCorreo.value)) {
        inputCorreo.classList.remove('formulario__input--error');
        return true
    } else {
        inputCorreo.classList.add('formulario__input--error');
        return false
    }
};

const marcarPaso = (paso) => {
    document
        .querySelector(`.linea-pasos [data-paso="${paso}"] span`)
        .classList.add('linea-pasos__paso-check--checked');
};

const siguientePaso = () => {
    // Creamos un array que contenga todos los pasos
    const pasos = [...document.querySelectorAll('.linea-pasos__paso')];

    // Obtener el paso activo en el que nos encontramos
    const pasoActivo = document
        .querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso');

    // Obtenemos el index del paso que está activo
    const indexPasoActivo = pasos.indexOf(pasoActivo);

    if (indexPasoActivo < pasos.length - 1) {
        // Eliminamos la clase activa
        pasoActivo
            .querySelector('span')
            .classList.remove('linea-pasos__paso-check--active');

        // Ponemos la clase activa al siguiente elemento
        pasos[indexPasoActivo + 1]
            .querySelector('span')
            .classList.add('linea-pasos__paso-check--active');

        const id = pasos[indexPasoActivo + 1].dataset.paso;
        document
            .querySelector(`.formulario__body [data-paso="${id}"]`)
            .scrollIntoView({
                inline: 'start',
                behavior: 'smooth',
            });
    }
};

const formulario = document.getElementById('formulario');

// Reiniciamos el scroll al cargar el formulario
formulario.querySelector('.formulario__body').scrollLeft = 0;

// Eventlistener para comprobar los campos de formulario cuando el usuario corrige los diferentes campos
formulario.addEventListener('keyup', (e) => {
    if (e.target.tagName === 'INPUT') {
        if (e.target.id === 'cantidad') {
            validarCantidad();
        } else if (e.target.id === 'nombre-receptor') {
            validarNombre();
        } else if (e.target.id === 'correo-receptor') {
            validarCorreo();
        }
    }
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();

    const pasoActual = document
        .querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso;

    if (pasoActual === 'cantidad') {
        if (validarCantidad()) {
            marcarPaso('cantidad');
            siguientePaso();
        }
    } else if (pasoActual === 'datos') {
        if (validarNombre() && validarCorreo()) {
            marcarPaso('datos');
            siguientePaso();
        }
    } else if (pasoActual === 'metodo') {
        marcarPaso('metodo');
        siguientePaso();
    }
});
//# sourceMappingURL=bundle.js.map
