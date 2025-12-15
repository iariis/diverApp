function guardarNuevoEvento() {
  const crearTitulo = document.getElementById("crear-titulo");
  const crearFecha = document.getElementById("crear-fecha");
  const crearHora = document.getElementById("crear-hora");
  const crearLugar = document.getElementById("crear-lugar");
  const crearCategoria = document.getElementById("crear-categoria");
  const crearModalidad = document.getElementById("crear-modalidad");
  const crearDescripcion = document.getElementById("crear-descripcion");
  const crearImagen = document.getElementById("crear-imagen");
  const crearError = document.getElementById("crear-error");

  if (
    !crearTitulo ||
    !crearFecha ||
    !crearHora ||
    !crearLugar ||
    !crearDescripcion ||
    !crearImagen // Asegurarnos que el input de imagen exista
  )
    return;

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

  const guardarYRenderizar = (imagenDataUrl = "") => {
    const nuevoEvento = {
      id: Date.now(),
      titulo,
      fecha,
      hora,
      lugar,
      categoria,
      modalidad,
      descripcion,
      imagen: imagenDataUrl,
      accesibilidad: {}, // Se puede extender para añadir opciones de accesibilidad
    };

    eventos.unshift(nuevoEvento); // Añade el nuevo evento al principio de la lista
    localStorage.setItem("diverAppEventos", JSON.stringify(eventos)); // Guarda la lista actualizada en localStorage

    // Refrescar la interfaz de usuario
    if (typeof renderInicio === "function") renderInicio();
    // Limpiar el formulario
    document.getElementById("form-crear-evento").reset();
    // Volver a la vista de inicio
    cambiarVista("inicio");
  };

  // Manejar la imagen de forma persistente con FileReader
  if (crearImagen && crearImagen.files && crearImagen.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      guardarYRenderizar(e.target.result); // Llama a guardar con la imagen en formato base64
    };
    reader.readAsDataURL(crearImagen.files[0]);
  } else {
    guardarYRenderizar(); // Llama a guardar sin imagen
  }
}