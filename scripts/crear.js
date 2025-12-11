/* scripts/crear.js */
function guardarNuevoEvento() {
  const crearTitulo = document.getElementById("crear-titulo");
  const crearFecha = document.getElementById("crear-fecha");
  const crearHora = document.getElementById("crear-hora");
  const crearLugar = document.getElementById("crear-lugar");
  const crearCategoria = document.getElementById("crear-categoria");
  const crearModalidad = document.getElementById("crear-modalidad");
  const crearDescripcion = document.getElementById("crear-descripcion");
  const crearError = document.getElementById("crear-error");

  if (!crearTitulo || !crearFecha || !crearHora || !crearLugar || !crearDescripcion) return;

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
    titulo, fecha, hora, lugar, categoria, modalidad, descripcion,
    imagen: "" // la usuaria puede añadir imagen luego (si quieren)
  };

  eventos.unshift(nuevoEvento); // se agrega al principio
  // refrescar UI
  if (typeof renderInicio === "function") renderInicio();
  // limpiar form
  document.getElementById("form-crear-evento").reset();
  // ir a inicio
  cambiarVista("inicio");
}
