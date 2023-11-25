import $ from '../funciones_globales/elementos_por_id.js'

export default function animaciones(elAncho, elElemento) {

    const anchoPantalla = elAncho

    let elementoTipo = elElemento

    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

    const alturaNosotrosH2 = $('#contenido-nosotros-h2').offsetHeight

    const alturaNosotros = $('#nosotros').offsetHeight

    const alturaIndustrial = $('#industrial').offsetHeight

    const alturaPostventa = $('#postventa').offsetHeight

    const alturaServicioTec = $('#serviciotecnico').offsetHeight

    const alturaEntrega = $('#entrega').offsetHeight

    const alturaCaracteristicas = $('#caracteristicas').offsetHeight

    const alturaBloqueMaterial = $('#material').offsetHeight

    const alturaBloqueTerminacion = $('#terminacion').offsetHeight

    const alturaCualidades = $('#cualidades').offsetHeight

    const alturaClientesH2 = $('#contenido-clientes-h2').offsetHeight

    const alturaClientes = $('#clientes').offsetHeight

    function animacionIconos() {

        window.addEventListener('scroll', function () {

            const alturaInicio = $('#nosotros-leer-mas').classList.contains('no')

            let alturaIconoIndustrial
            let alturaIconoPostventa
            let alturaIconoTecnico
            let alturaIconoEntrega
            let alturaIconosDkp

            let scrollActual = window.pageYOffset || document.documentElement.scrollTop

            if(anchoPantalla < 768) {

                if(alturaInicio) {

                    alturaIconoIndustrial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientesH2
        
                    alturaIconoPostventa = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2)
        
                    alturaIconoTecnico = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2) + (alturaClientes /4)
        
                    alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes
        
                } else {
        
                    alturaIconoIndustrial = alturaCabecera + alturaCarrousel + (alturaNosotrosH2 / 2)
        
                    // alturaIconoPostventa = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2)
    
                    alturaIconoPostventa = alturaCabecera + alturaCarrousel + (alturaNosotros /2)
        
                    // alturaIconoTecnico = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2) + (alturaClientes /4)
    
                    alturaIconoTecnico = alturaCabecera + alturaCarrousel + alturaNosotros - (alturaNosotros /4)
        
                    alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaIndustrial /2)
        
                }

                if (scrollActual >= alturaIconoIndustrial) {

                    $('#industrial').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaIconoPostventa) {
    
                    $('#postventa').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaIconoTecnico) {
    
                    $('#serviciotecnico').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaIconoEntrega) {
    
                    $('#entrega').classList.add('animacion')
    
                }

            } else {

                alturaIconosDkp = alturaCabecera + alturaCarrousel + (alturaNosotros / 4)

                if (scrollActual >= alturaIconosDkp) {

                    $('#industrial').classList.add('animacion')
                    $('#postventa').classList.add('animacion')
                    $('#serviciotecnico').classList.add('animacion')
                    $('#entrega').classList.add('animacion')
    
                }

            }

        })

    }

    function animacionCualidades() {

        // const alturaIconoIndustrial = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /4)

        // const alturaMaterial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa

        // const alturaTerminacion = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa + alturaServicioTec

        // const alturaResultado = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa + alturaServicioTec + alturaEntrega

        // const alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes

        window.addEventListener('scroll', function () {

            const alturaInicio = $('#nosotros-leer-mas').classList.contains('no')

            let alturaMaterial
            let alturaTerminacion
            let alturaResultado
            let alturaCualidadesDkp

            let scrollActual = window.pageYOffset || document.documentElement.scrollTop

            if(anchoPantalla < 768) {

                if(alturaInicio) {

                    alturaMaterial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas + alturaBloqueMaterial
    
                    alturaTerminacion = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas + alturaBloqueMaterial + alturaBloqueTerminacion
    
                    alturaResultado = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas + alturaBloqueMaterial + (alturaBloqueTerminacion *3)
    
                    // alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes
    
                } else {
    
                    alturaMaterial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaIndustrial + alturaPostventa
    
                    alturaTerminacion = alturaCabecera + alturaCarrousel + alturaNosotros + alturaIndustrial + alturaPostventa + alturaServicioTec + (alturaEntrega /2)
    
                    alturaResultado = alturaCabecera + alturaCarrousel + alturaNosotros + alturaIndustrial + alturaPostventa + alturaServicioTec + alturaEntrega + (alturaEntrega /2)
    
                    console.log('ALTURA MATERIAL:')
                    console.log(alturaMaterial)
                    console.log('*************')
                    console.log('ALTURA TERMINACION:')
                    console.log(alturaTerminacion)
                    console.log('*************')
                    console.log('ALTURA RESULTADO:')
                    console.log(alturaResultado)
                    console.log('*************')
                    console.log('SCROLL ACTUAL:')
                    console.log(scrollActual)
                    console.log('*************')
    
                    // alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes
    
                }
    
                // let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
                if (scrollActual >= alturaMaterial) {
    
                    $('#material').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaTerminacion) {
    
                    $('#terminacion').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaResultado) {
    
                    $('#resultado').classList.add('animacion')
    
                }

            } else {

                // alturaCualidadesDkp = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaCaracteristicas / 4)

                // alturaCualidadesDkp = alturaCabecera + alturaCarrousel + (alturaNosotros / 2)

                alturaCualidadesDkp = alturaCabecera + alturaCarrousel + alturaNosotros - (alturaNosotros / 3)

                if (scrollActual >= alturaCualidadesDkp) {
    
                    $('#material').classList.add('animacion')
                    $('#terminacion').classList.add('animacion')
                    $('#resultado').classList.add('animacion')
    
                }


            }
            

        })

        

    }

    function animacionesEncabezados() {

        function fadeIn() {

            const alturaParaNosotros = alturaCabecera + alturaCarrousel / 40
    
            // const alturaParaClientes = alturaCabecera + alturaCarrousel + (alturaNosotrosH2 / 2)

            // const alturaParaClientes = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas + alturaCualidades
    
            window.addEventListener('scroll', function () {

                const alturaInicio = $('#nosotros-leer-mas').classList.contains('no')

                let alturaParaClientes

                

                if(anchoPantalla > 768) {

                    alturaParaClientes = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaCaracteristicas / 4)

                } else {

                    if(alturaInicio) {

                        alturaParaClientes = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas + alturaCualidades
    
                    } else {
    
                        alturaParaClientes = alturaCabecera + alturaCarrousel + alturaNosotros + alturaCaracteristicas
    
                    }

                }

                
    
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
                if (scrollActual >= alturaParaNosotros) {
    
                    $('#contenido-nosotros-h2').classList.add('animacion')

                    if(anchoPantalla > 768) {
                        $('#nuestra-empresa-texto').classList.add('animacion')
                    }
    
                }
    
                if (scrollActual >= alturaParaClientes) {
    
                    $('#contenido-clientes-h2').classList.add('animacion')
    
                }
            })
    
        }
    
        fadeIn()

    }

    if (elementoTipo === 'encabezados') {
        animacionesEncabezados()
    }

    if (elementoTipo === 'iconos') {
        animacionIconos()
    }

    if (elementoTipo === 'cualidades') {
        animacionCualidades()
    }

}

// export default function animacionesEncabezados() {

//     const alturaCabecera = $('#cabecera').offsetHeight

//     const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

//     const alturaNosotros = $('#contenido-nosotros-h2').offsetHeight

//     function fadeIn() {

//         const alturaParaNosotros = alturaCabecera + alturaCarrousel / 40

//         const alturaParaClientes = alturaCabecera + alturaCarrousel + (alturaNosotros / 2)

//         window.addEventListener('scroll', function () {

//             let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//             if (scrollActual >= alturaParaNosotros) {

//                 $('#contenido-nosotros-h2').classList.add('animacion')

//             }

//             if (scrollActual >= alturaParaClientes) {

//                 $('#contenido-clientes-h2').classList.add('animacion')

//             }
//         })

//     }

//     fadeIn()

//     // const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

//     // window.addEventListener('scroll', function () {

//     //     let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//     //     console.log('**********')
//     //     console.log('La sección:')
//     //     console.log(seccion)
//     //     console.log('**********')

//     //     if (scrollActual >= sumaAlturaCabezaMasCarrusel) {

//     //         $('#contenido-clientes-h2').classList.add('animacion')

//     //     }

//     // })

// }

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