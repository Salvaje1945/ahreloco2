import $ from './funciones_globales/elementos_por_id.js'
import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'

export default function clientesSlider(mostrar) {

    let mostrarOno = mostrar

    let elAnchoP = dameElAnchoDePantalla()


    


    function activarSlider(ancho) {

        let anchoPantallaFuncion = ancho

        if (anchoPantallaFuncion < 1024) {

            let indice = 0

            const tarjetas = document.querySelectorAll('.clientes__slider--slide')

            // console.log($('#clientes-slider').style)

            const elementoDom = $('#clientes-slider')

            console.log('*** ELEMENTO DOM POR CONSOLA ***')

            console.log(elementoDom)

            if (elementoDom != null) {

                const elementoDomStyle = $('#clientes-slider').style

                console.log(elementoDomStyle)

                function tarjetasMovimiento() {

                    indice += 1

                    if (indice >= tarjetas.length) {
                        indice = 0
                    }

                    if (elementoDomStyle != null) {

                        elementoDomStyle.transform = "translateX(-" + indice * 100 + "svw)"

                    } else {

                        console.log('*** ELEMENTO DOM SI ESTÁ NULL ')
                        console.log(elementoDomStyle)

                    }



                }

                setInterval(tarjetasMovimiento, 5000)

            }

            


            

        } else {
            console.log('*** ACÁ EL SLIDER SE TIENE QUE FRENAR ***')
        }

        

    }

    if(mostrarOno === 'si') {
        
        activarSlider(elAnchoP)

        window.addEventListener('resize', ()=> {

            let anchoResized = dameElAnchoDePantalla()
        
            activarSlider(anchoResized)
        })

    } else {
        return null

    }

    // if(mostrarOno === 'no'){

    //     window.addEventListener('resize', ()=> {

    //         let anchoResized = dameElAnchoDePantalla()

    //         if(anchoResized < 1024){

    //             activarSlider(anchoResized)

    //         }
            
    //     })

    // }


    
    // let indice = 0

    // const tarjetas = document.querySelectorAll('.clientes__slider--slide')

    // function tarjetasMovimiento() {

    //     indice += 1

    //     if(indice >= tarjetas.length){
    //         indice = 0
    //     }

    //     $('#clientes-slider').style.transform = "translateX(-" + indice * 100 + "svw)"

    // }

    // setInterval(tarjetasMovimiento, 5000)

    /*

    function activarSlider() {

        let indice = 0

        const tarjetas = document.querySelectorAll('.clientes__slider--slide')

        function tarjetasMovimiento() {

            indice += 1

            if (indice >= tarjetas.length) {
                indice = 0
            }

            $('#clientes-slider').style.transform = "translateX(-" + indice * 100 + "svw)"

        }

        setInterval(tarjetasMovimiento, 5000)

    }

    let objetoExiste = $('#clientes-slider')

    console.log('*** CLIENTES SLIDER ***')
    console.log(objetoExiste)

    if(objetoExiste) {

        activarSlider()

    }

    window.addEventListener('resize', ()=> {
        
        if(objetoExiste) {

            activarSlider()
    
        }
    
    })

    */
}