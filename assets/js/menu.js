import $ from './funciones_globales/elementos_por_id.js'
import mostrarBotonSubir from './boton_subir.js'
import alertas from './alertas.js'

export default function cabeceraAbrirMenu() {
    $('#cabecera-menu-abrir').classList.remove('activo')
    $('#cabecera-menu-cerrar').classList.add('activo')
    $('#cabecera-menu-desp').classList.add('activo')

    function cabeceraCerrarMenu() {
        $('#cabecera-menu-abrir').classList.add('activo')
        $('#cabecera-menu-cerrar').classList.remove('activo')
        $('#cabecera-menu-desp').classList.remove('activo')
    }

    $('#cabecera-menu-cerrar').onclick = cabeceraCerrarMenu

    function accionEnClicOpsMenu(){
        cabeceraCerrarMenu()
        mostrarBotonSubir()
    }

    $('#menu-mov-nosotros').onclick = accionEnClicOpsMenu
    $('#menu-mov-clientes').onclick = accionEnClicOpsMenu
    $('#menu-mov-contacto').onclick = accionEnClicOpsMenu
    $('#menu-mov-catalogo').addEventListener('click', (evt)=>{
        evt.preventDefault()
        cabeceraCerrarMenu()
        alertas('catalogo')
    })
}