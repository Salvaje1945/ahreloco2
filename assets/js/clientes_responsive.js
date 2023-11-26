import $ from './funciones_globales/elementos_por_id.js'
import clientesSlider from './clientes.js'
// import mostrarBotonSubir from './boton_subir.js'
// import cabeceraAbrirMenu from './menu.js'

export default function responsiveSlider(id, mq, mobileContent, desktopContent) {
    
    let breakPoint = window.matchMedia(mq)

    const responsive = (evt) =>{
        if(evt.matches){
            $(id).innerHTML = desktopContent
            clientesSlider('no')
        } else {
            $(id).innerHTML = mobileContent
            clientesSlider('si')
        }
    }
    breakPoint.addListener(responsive)
    responsive(breakPoint)
}