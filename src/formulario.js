import validarCantidad from './validarCantidad'

const formulario = document.getElementById('formulario')

formulario.addEventListener('keyup', (e) => {
    if (e.target.tagName === 'INPUT') {
        if (e.target.id === 'cantidad') {
            validarCantidad()
        }
    }
})
