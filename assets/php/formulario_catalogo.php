<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'));

  // Obtén los datos del formulario
  $correoDestino = $data->correoDestino;
  $nombre = $data->nombre;
  $correo = $data->correo;
  $provincia = $data->provincia;
  $localidad = $data->localidad;
  $codigoarea = $data->codigoarea;
  $telefono = $data->telefono;

  // Aquí puedes usar la función mail() de PHP para enviar un correo electrónico
  $asunto = 'Nuevo formulario enviado';
  $mensaje = "Nombre: $nombre\nEmail: $correo\nProvincia: $provincia\nLocalidad: $localidad\nCodigo de area: $codigoarea\nTelefono: $telefono";
  $cabeceras = "From: $correo";

  if (mail($correoDestino, $asunto, $mensaje, $cabeceras)) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }
}
?>