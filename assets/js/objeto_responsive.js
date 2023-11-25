import $ from './funciones_globales/elementos_por_id.js'
import mostrarBotonSubir from './boton_subir.js'
import cabeceraAbrirMenu from './menu.js'
import alertas from './alertas.js'

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    
    let breakPoint = window.matchMedia(mq)

    const responsive = (evt) =>{
        if(evt.matches){
            $(id).innerHTML = desktopContent
            $('#menu-dkp-nosotros').onclick = mostrarBotonSubir
            $('#menu-dkp-clientes').onclick = mostrarBotonSubir
            $('#menu-dkp-catalogo').onclick = mostrarBotonSubir
            $('#menu-dkp-contacto').onclick = mostrarBotonSubir
            $('#abrir-catalogo-dkp').addEventListener('click', (evt)=>{
                evt.preventDefault()
                alertas('catalogo')
            })
        } else {
            $(id).innerHTML = mobileContent
            $('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu
        }
    }
    breakPoint.addListener(responsive)
    responsive(breakPoint)
}