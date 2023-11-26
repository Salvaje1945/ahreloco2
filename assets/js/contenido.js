// import $ from './funciones_globales/elementos_por_id.js'
import animaciones from './animaciones/animaciones.js'
import responsiveMedia from './objeto_responsive.js'
import responsiveSlider from './clientes_responsive.js'
import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
import carrouselContenido from './carousel.js'
import expYcontrTxt from './expandir.js'

export default function mostrarContenidos(ubicador) {

    if(ubicador === 'principal') {

        const anchoDePantallaInicial = dameElAnchoDePantalla()
    
        animaciones(anchoDePantallaInicial, 'encabezados')
        animaciones(anchoDePantallaInicial, 'iconos')
        animaciones(anchoDePantallaInicial, 'cualidades')

        responsiveMedia('#cabecera', '(min-width: 1024px)',
            `<div class="cabecera__contenido--moviles" id="cabecera-contenido">
            <nav class="cabecera__desplegable--menu" id="cabecera-menu-desp">
            <ul>
            <li><a href="#nosotros" id="menu-mov-nosotros">Nuestra empresa</a></li>
            <li><a href="#clientes" id="menu-mov-clientes">Quienes nos eligen</a></li>
            <li><a href="herramientas.html">Herramientas</a></li>
            <li><a href="insumos.html">Insumos</a></li>
            <li><a href="asesoramiento_tecnico.html">Asesoramiento técnico</a></li>
            <li><a href="#" id="menu-mov-catalogo">Catálogo</a></li>
            <li><a href="#contacto" id="menu-mov-contacto">Contáctenos</a></li>
            </ul>
            </nav>
            <div class="cabecera__moviles--logo">
            <!-- <div class="cabecera__moviles--logo_img">
            <img src="assets/img/IF_logo_corona_moviles.png" alt="International Fasteners S.A. - Herramientas neumáticas e insumos para la industria." />
            </div>
            <div class="cabecera__moviles--titulo">
            <h1>International Fasteners</h1>
            </div> -->
            <h1>International Fasteners</h1>
            </div>
            <div class="cabecera__moviles--btn activo" id="cabecera-menu-abrir"><i class="fa-solid fa-bars"></i></div>
            <div class="cabecera__moviles--btn" id="cabecera-menu-cerrar"><i class="fa-solid fa-xmark"></i></div>
            </div>`,
            `<div class="cabecera__contenido">
            <div class="cabecera__contenido--logo">
            <div class="cabecera__contenido--logo_img">
            <img src="assets/img/International_Fasteners_SA_Logo.png" alt="International Fasteners S.A. - Herramientas neumáticas e insumos para la industria." />
                </div>
                <div class="cabecera__contenido--titulo">
                    <h1>International Fasteners</h1>
                </div>
            </div>
            <nav class="cabecera__contenido--menu">
                <ul>
                    <li><a href="#nosotros" id="menu-dkp-nosotros">Nuestra empresa</a></li>
                    <li><a href="#clientes" id="menu-dkp-clientes">Quienes nos eligen</a></li>
                    <li><a href="herramientas.html">Herramientas</a></li>
                    <li><a href="insumos.html">Insumos</a></li>
                    <li><a href="asesoramiento_tecnico.html">Asesoramiento técnico</a></li>
                    <li><a href="#catalogo" id="menu-dkp-catalogo">Catálogo</a></li>
                    <li><a href="#contacto" id="menu-dkp-contacto">Contáctenos</a></li>
                </ul>
            </nav>
        </div>`)

        responsiveSlider('#contenido-clientes-contenedor', '(min-width: 1024px)', `<div class="contenido__clientes--slider" id="clientes-slider">
            <div class="clientes__slider--slide">
                <a href="https://www.expoyerweb.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_expoyer_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://fabrilmadererasa.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_fabril_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.kanjitech.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_kanji_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.moraspuertas.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_moras_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://novakasaviviendas.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_novakasa_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.oblak.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_oblak_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.orbis.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_orbis_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.pinceleseltucan.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_pincelestucan_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.rheem.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_rheem_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://simet.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_simet_logo_01.jpg" />
                </a>
            </div>
            <div class="clientes__slider--slide">
                <a href="https://www.viamo.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_viamo_logo_01.jpg" />
                </a>
            </div>
            </div>`, `<div class="contenido__clientes--logos">
            <ul>
            <li>
                <a href="https://www.expoyerweb.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_expoyer_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://fabrilmadererasa.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_fabril_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.kanjitech.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_kanji_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.moraspuertas.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_moras_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://novakasaviviendas.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_novakasa_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.oblak.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_oblak_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.orbis.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_orbis_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.pinceleseltucan.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_pincelestucan_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.rheem.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_rheem_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://simet.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_simet_logo_01.jpg" />
                </a>
            </li>
            <li>
                <a href="https://www.viamo.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/clientes/clientes_viamo_logo_01.jpg" />
                </a>
            </li>
            </ul>
        </div>`)

        carrouselContenido()

        expYcontrTxt()

    }

}