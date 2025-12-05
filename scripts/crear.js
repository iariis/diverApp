function guardarNuevoEvento() {
  crearError.textContent = "";

  const titulo = crearTitulo.value.trim();
  const fecha = crearFecha.value;
  const hora = crearHora.value;
  const lugar = crearLugar.value.trim();
  const categoria = crearCategoria.value;
  const modalidad = crearModalidad.value;
  const descripcion = crearDescripcion.value.trim();

  if (!titulo || !fecha || !hora || !lugar || !descripcion) {
    crearError.textContent = "Por favor, completá todos los campos.";
    return;
  }

  const nuevoEvento = {
    id: Date.now(),
    titulo,
    categoria,
    fecha,
    hora,
    lugar,
    modalidad,
    descripcion,
  };

  eventos.unshift(nuevoEvento);

  formCrearEvento.reset();
  cambiarVista("explorar");
  renderExplorarEventos();
}
