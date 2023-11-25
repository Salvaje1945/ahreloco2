import $ from './funciones_globales/elementos_por_id.js'

export default function expYcontrTxt() {
    
    function expandirNosotros() {
        $('#nuestra-empresa_txt').classList.add('activo')
        $('#info-nosotros-fx').classList.add('no')
        $('#nosotros-leer-mas').classList.add('no')
        // $('#nosotros-leer-menos').classList.remove('no')
    }

    // function contraerNosotros() {
    //     $('#nuestra-empresa_txt').classList.remove('activo')
    //     $('#info-nosotros-fx').classList.remove('no')
    //     // $('#nosotros-leer-mas').classList.remove('no')
    //     $('#nosotros-leer-menos').classList.add('no')

    //     setTimeout(()=>{
    //         $('#nosotros-leer-mas').classList.remove('no')
    //     }, 300)
    // }

    $('#nosotros-leer-mas').onclick = expandirNosotros
    // $('#nosotros-leer-menos').onclick = contraerNosotros
}