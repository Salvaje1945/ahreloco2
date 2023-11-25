import $ from './funciones_globales/elementos_por_id.js'

export default function clientesSlider() {
    
    let indice = 0

    const tarjetas = document.querySelectorAll('.clientes__slider--slide')

    function tarjetasMovimiento() {

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        $('#clientes-slider').style.transform = "translateX(-" + indice * 100 + "svw)"

    }

    setInterval(tarjetasMovimiento, 5000)
}