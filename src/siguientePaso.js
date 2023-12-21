const siguientePaso = () => {
    // Creamos un array que contenga todos los pasos
    const pasos = [...document.querySelectorAll('.linea-pasos__paso')]

    // Obtener el paso activo en el que nos encontramos
    const pasoActivo = document
        .querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso')

    // Obtenemos el index del paso que está activo
    const indexPasoActivo = pasos.indexOf(pasoActivo)

    if (indexPasoActivo < pasos.length - 1) {
        // Eliminamos la clase activa
        pasoActivo
            .querySelector('span')
            .classList.remove('linea-pasos__paso-check--active')

        // Ponemos la clase activa al siguiente elemento
        pasos[indexPasoActivo + 1]
            .querySelector('span')
            .classList.add('linea-pasos__paso-check--active')

        const id = pasos[indexPasoActivo + 1].dataset.paso
        document
            .querySelector(`.formulario__body [data-paso="${id}"]`)
            .scrollIntoView({
                inline: 'start',
                behavior: 'smooth',
            })
    }
}

export default siguientePaso
