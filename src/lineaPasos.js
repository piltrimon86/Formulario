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

    // Validamos el campo actual
    if (pasoActual === 'cantidad') {
        if (!validarCantidad()) return
    } else if (pasoActual === 'datos') {
        if (!validarNombre() || !validarCorreo()) return
    }

    // Obtenemos el paso al que queremos navegar
    const pasoANavegar = e.target.closest('.linea-pasos__paso')

    // Comprobamos si el paso tiene el icono de check
    // Solo queremos poder dar click a los pasos que tienen el check
    if (pasoANavegar.querySelector('.linea-pasos__paso-check--checked')) {
        const pasoActual = linea.querySelector(
            '.linea-pasos__paso-check--active'
        )
        pasoActual.classList.remove('linea-pasos__paso-check--active')

        // Obtenemos el identificador del paso a navegar
        const id = pasoANavegar.dataset.paso

        // Agregamos la clase active al nuevo paso
        linea
            .querySelector(`[data-paso="${id}"] span`)
            .classList.add('linea-pasos__paso-check--active')

        // Navegamos al paso que queremos
        document
            .querySelector(`.formulario__body [data-paso="${id}"]`)
            .scrollIntoView({
                inline: 'start',
                behavior: 'smooth',
            })
    }
})
