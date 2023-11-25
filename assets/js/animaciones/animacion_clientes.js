import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionClientes() {

    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

    const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

    // contenido-clientes-h2

    window.addEventListener('scroll', function () {

        let scrollActual = window.pageYOffset || document.documentElement.scrollTop

        if (scrollActual >= sumaAlturaCabezaMasCarrusel) {

            $('#contenido-clientes-h2').classList.add('animacion')

        }

    })


}

// export default function animacionNosotros(elAncho) {

//     const alturaCabecera = $('#cabecera').offsetHeight

//     const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

//     const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

//     const anchoEjecusion = elAncho

//     // *** CONSOLA ***

//     console.log('*** ALTO DE LA CABECERA ***')

//     console.log(alturaCabecera)

//     console.log('******')

//     console.log('*** ALTO DEL CAROUSEL ***')

//     console.log(alturaCarrousel)

//     console.log('******')

//     console.log('*** ALTO DE PANTALLA ***')

//     console.log(sumaAlturaCabezaMasCarrusel)

//     console.log('******')

//     console.log('*** ANCHO DE PANTALLA ***')

//     console.log(anchoEjecusion)

//     function ejecutarAnimacion() {

//         window.addEventListener('scroll', function () {

//             if (anchoEjecusion < 768) {

//                 let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//                 //console.log('*** ')

//                 let porcentajeScroll = (scrollActual * 100) / sumaAlturaCabezaMasCarrusel

//                 let posicionElemento = porcentajeScroll - 100

//                 $('#nuestra-empresa').style.left = posicionElemento + "%"

//                 //$('#nosotros-contenido-texto').style.right = posicionElemento + "%"

//                 if (scrollActual >= sumaAlturaCabezaMasCarrusel) {
//                     $('#nuestra-empresa').style.left = 'auto'
//                     // $('#nosotros-contenido-texto').style.right = 'auto'
//                     // $('#nosotros-cabecera-box').classList.add('fijo')
//                 }

//                 // if (scrollActual <= sumaAlturaCabezaMasCarrusel) {
//                 //     $('#nosotros-cabecera-box').classList.remove('fijo')
//                 // }

//             } else {

//                 console.log('acá es mayor a 768, no debería funcar')

//                 // $('#nosotros-cabecera-titulo').style.left = "-100%"

//                 // $('#nosotros-contenido-texto').style.right = "-100%"

//                 //return
//             }
    
//         })
//     }

//     ejecutarAnimacion()

//     // if(anchoEjecusion < 768){
//     //     ejecutarAnimacion()
//     // } else {

//     //     console.log('acá es mayor a 768, no debería funcar')

//     //     $('#nosotros-cabecera-titulo').style.left = "-100%"
    
//     //     $('#nosotros-contenido-texto').style.right = "-100%"

//     //     return
//     // }

// }