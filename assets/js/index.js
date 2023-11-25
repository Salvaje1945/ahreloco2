//import $ from './funciones_globales/elementos_por_id.js'
//import dameElAltoDePantalla from './funciones_globales/alto_pantalla.js'
import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
// import clientesSlider from './clientes.js'
// import cabeceraAbrirMenu from './menu.js'
// import animacionNosotros from './animaciones/animacion_nosotros.js'
// import animacionClientes from './animaciones/animacion_clientes.js'
import animaciones from './animaciones/animaciones.js'
// import cualquieraEh from './animaciones/animaciones_encabezados.js'
import responsiveMedia from './objeto_responsive.js'
import responsiveSlider from './clientes_responsive.js'
import carrouselContenido from './carousel.js'
import expYcontrTxt from './expandir.js'

document.addEventListener('DOMContentLoaded', ()=> {

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

// responsiveMedia('#nosotros', '(min-width: 1024px)',
// `<h2 id="contenido-nosotros-h2" class="nosotros__h2">NUESTRA EMPRESA</h2>
// <div class="contenido__info--nosotros_txt-box" id="nuestra-empresa_txt">
//     <div>
//         <p id="nuestra-empresa-texto">International Fasteners S.A. fue fundada en 1995, en respuesta a la demanda de tecnificación de un mercado en crecimiento: el de la industria nacional del mueble. La transición que muchos de los fabricantes buscaban llevar adelante, desde las tareas tradicionales hechas a mano hacia la incorporación de herramientas e insumos de calidad, fue sin dudas el puntapié inicial del proyecto. La búsqueda de la empresa rápidamente se concentró en lograr una alianza estratégica con una de las marcas líderes en el mercado europeo, con una vasta línea de engrampadoras y clavadoras industriales: la alemana Prebena.<br/><br/>
//         Con el advenimiento del nuevo milenio, el crecimiento de la empresa llegó a un nuevo hito. Conscientes de la necesidad de ofrecer soluciones para las diversas etapas de la cadena de valor de la producción argentina, decidimos sumar una nueva representación internacional. En el 2006, nos convertimos en distribuidores exclusivos de Sumake, lo cual nos permitió ampliar nuestro catálogo, sumando atornilladoras, agujereadoras y lijadoras industriales. Continuando con la calidad como principio rector de nuestra búsqueda, elegimos una marca certificada bajo normas ISO 9001; un respaldo adicional para acercar a nuestros clientes únicamente productos de alto rendimiento.<br/><br/>
//         Empeñados en seguir ofreciendo nuevos productos al mercado local, hemos ampliado nuestra capacidad productiva adquiriendo maquinaria de última tecnología en el exterior, para la fabricación en nuestro país de grampas en acero al carbono electrogalvanizado. Ello les brinda a nuestros clientes la seguridad de que no sólo cuentan con herramientas que los acompañan en su labor diaria, sino también de insumos de primera calidad destinados al aumento de la productividad en sus fábricas.</p>
//         <div id="info-nosotros-fx" class="info__nosotros--txt_fx"></div>
//     </div>
// </div>
// <button class="btn_01" id="nosotros-leer-mas">LEER MAS</button>`,
// `<h2 id="contenido-nosotros-h2" class="nosotros__h2">NUESTRA EMPRESA</h2>
// <div class="contenido__info--nosotros_txt-dkp" id="nuestra-empresa_txt">
//     <p id="nuestra-empresa-texto">International Fasteners S.A. fue fundada en 1995, en respuesta a la demanda de tecnificación de un mercado en crecimiento: el de la industria nacional del mueble. La transición que muchos de los fabricantes buscaban llevar adelante, desde las tareas tradicionales hechas a mano hacia la incorporación de herramientas e insumos de calidad, fue sin dudas el puntapié inicial del proyecto. La búsqueda de la empresa rápidamente se concentró en lograr una alianza estratégica con una de las marcas líderes en el mercado europeo, con una vasta línea de engrampadoras y clavadoras industriales: la alemana Prebena.<br/><br/>
//     Con el advenimiento del nuevo milenio, el crecimiento de la empresa llegó a un nuevo hito. Conscientes de la necesidad de ofrecer soluciones para las diversas etapas de la cadena de valor de la producción argentina, decidimos sumar una nueva representación internacional. En el 2006, nos convertimos en distribuidores exclusivos de Sumake, lo cual nos permitió ampliar nuestro catálogo, sumando atornilladoras, agujereadoras y lijadoras industriales. Continuando con la calidad como principio rector de nuestra búsqueda, elegimos una marca certificada bajo normas ISO 9001; un respaldo adicional para acercar a nuestros clientes únicamente productos de alto rendimiento.<br/><br/>
//     Empeñados en seguir ofreciendo nuevos productos al mercado local, hemos ampliado nuestra capacidad productiva adquiriendo maquinaria de última tecnología en el exterior, para la fabricación en nuestro país de grampas en acero al carbono electrogalvanizado. Ello les brinda a nuestros clientes la seguridad de que no sólo cuentan con herramientas que los acompañan en su labor diaria, sino también de insumos de primera calidad destinados al aumento de la productividad en sus fábricas.</p>
// </div>`)

})

// window.addEventListener('resize', ()=> {
//     const anchoDePantalla = dameElAnchoDePantalla()
//     animacionNosotros(anchoDePantalla)
    
// })

// $('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu

// $('#cabecera-menu-abrir').addEventListener('click', cabeceraAbrirMenu)

carrouselContenido()

expYcontrTxt()

// clientesSlider()