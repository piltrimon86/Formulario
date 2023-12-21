import validarCantidad from './validaciones/validarCantidad'
import validarNombre from './validaciones/validarNombre'
import validarCorreo from './validaciones/validarCorreo'
import marcarPaso from './marcarPaso'
import siguientePaso from './siguientePaso'

const formulario = document.getElementById('formulario')

// Reiniciamos el scroll al cargar el formulario
formulario.querySelector('.formulario__body').scrollLeft = 0

// Eventlistener para comprobar los campos de formulario cuando el usuario corrige los diferentes campos
formulario.addEventListener('keyup', (e) => {
    if (e.target.tagName === 'INPUT') {
        if (e.target.id === 'cantidad') {
            validarCantidad()
        } else if (e.target.id === 'nombre-receptor') {
            validarNombre()
        } else if (e.target.id === 'correo-receptor') {
            validarCorreo()
        }
    }
})

const btnFormulario = document.getElementById('formulario__btn')
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault()

    const pasoActual = document
        .querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso

    if (pasoActual === 'cantidad') {
        if (validarCantidad()) {
            marcarPaso('cantidad')
            siguientePaso()
        }
    } else if (pasoActual === 'datos') {
        if (validarNombre() && validarCorreo()) {
            marcarPaso('datos')
            siguientePaso()
        }
    } else if (pasoActual === 'metodo') {
        marcarPaso('metodo')
        siguientePaso()
    }
})
