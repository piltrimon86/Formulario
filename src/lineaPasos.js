import validarCantidad from './validaciones/validarCantidad'
import validarCorreo from './validaciones/validarCorreo'
import validarNombre from './validaciones/validarNombre'

const linea = document.getElementById('linea-pasos')
linea.addEventListener('click', (e) => {
    // Validamos que el click sea en un Paso
    if (!e.target.closest('.linea-pasos__paso')) return

    const pasoActual = document
        .querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso

    if (pasoActual === 'cantidad') {
        if (!validarCantidad()) return
    } else if (pasoActual === 'datos') {
        if (!validarNombre() || !validarCorreo()) return
    }
    console.log('Cambiando de Paso...')
})
