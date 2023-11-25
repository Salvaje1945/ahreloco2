// import $ from './funciones_globales/elementos_por_id.js'

export default function alertas(tipo) {

  function descargarCatalogo() {

    const form = document.createElement('form')
    form.innerHTML = `
        <label for="nombre" class="alertas__label">Nombre:</label>
        <input type="text" id="nombre" required><br>
        
        <label for="correo" class="alertas__label">Correo electrónico:</label>
        <input type="correo" id="correo" required><br>
        
        <label for="provincia" class="alertas__label">Provincia:</label>
        <select type="text" name="provincia" id="provincia" placeholder="Tu Provincia" value="">
					<option value="" hidden=""> Seleccione su provincia </option>
          <option value="Capital Federal">Capital Federal</option>
          <option value="Buenos Aires - GBA">Buenos Aires - GBA</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Catamarca">Catamarca</option>
          <option value="Chaco">Chaco</option>
          <option value="Chubut">Chubut</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Corriente">Corrientes</option>
          <option value="Entre Ríos">Entre Ríos</option>
          <option value="Formosa">Formosa</option>
          <option value="Jujuy">Jujuy</option>
          <option value="La Pampa">La Pampa</option>
          <option value="La Rioja">La Rioja</option>
          <option value="Mendoza">Mendoza</option>
          <option value="Misiones">Misiones</option>
          <option value="Neuquén">Neuquén</option>
          <option value="Río Negro">Río Negro</option>
          <option value="Salta">Salta</option>
          <option value="San Juan">San Juan</option>
          <option value="San Luis">San Luis</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Santiago del Estero">Santiago del Estero</option>
          <option value="Tierra del Fuego">Tierra del Fuego</option>
          <option value="Tucumán">Tucumán</option>
        </select><br>
        
        <label for="localidad" class="alertas__label">Localidad:</label>
        <input type="text" id="localidad" required><br>
        
        <label for="codigoarea" class="alertas__label">Código de área:</label>
        <input type="number" id="codigoarea" required><br>
        
        <label for="telefono" class="alertas__label">Teléfono:</label>
        <input type="number" id="telefono" required><br>
        <input type="hidden" id="correoDestino" value="revista.insomnio@gmail.com">`

    Swal.fire({
      title: 'DESCARGAR CATÁLOGO',
      html: form,
      footer: '<p class="alertas__parrafo">* International Fasteners S.A. le garantiza que los datos aquí recopilados serán protegidos conforme a lo establecido por la Ley 25.326 de Protección de Datos Personales.</p>',
      width: '90svw',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        confirmButton: 'btn_03',
        cancelButton: 'btn_04'
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para abrir un archivo externo en otra pestaña
        // window.open('assets/files/INTERNATIONAL FASTENERS - CATALOGO 2022 - MAQUINAS Y HERRAMIENTAS NEUMATICAS.pdf', '_blank')

        const correoDestino = document.getElementById('correoDestino').value;
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const provincia = document.getElementById('provincia').value;
        const localidad = document.getElementById('localidad').value;
        const codigoarea = document.getElementById('codigoarea').value;
        const telefono = document.getElementById('telefono').value;

        fetch('assets/php/formulario_catalogo.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            correoDestino,
            nombre,
            correo,
            provincia,
            localidad,
            codigoarea,
            telefono,
          }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            Swal.fire('Éxito', 'Formulario enviado con éxito.', 'success');
            // Aquí puedes abrir el archivo externo después de enviar el formulario
            window.open('assets/files/INTERNATIONAL FASTENERS - CATALOGO 2022 - MAQUINAS Y HERRAMIENTAS NEUMATICAS.pdf', '_blank')
          } else {
            Swal.fire('Error', 'Ha ocurrido un error al enviar el formulario.', 'error');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });

      }
    })

  }

    if(tipo === 'catalogo') {
        descargarCatalogo()
    }

}