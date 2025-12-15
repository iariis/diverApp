function abrirDetalle(id) {
  const ev = eventos.find(e => e.id === id);
  if (!ev) return;

  eventoSeleccionado = ev;

  const detalleTitulo = document.getElementById("detalle-titulo");
  const detalleFecha = document.getElementById("detalle-fecha");
  const detalleLugar = document.getElementById("detalle-lugar");
  const detalleModalidad = document.getElementById("detalle-modalidad");
  const detalleDescripcion = document.getElementById("detalle-descripcion");
  const detalleTags = document.getElementById("detalle-tags");
  const detalleImagen = document.getElementById("detalle-imagen");
  const detalleEstado = document.getElementById("detalle-estado");
  const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");

  if (detalleTitulo) detalleTitulo.textContent = ev.titulo;
  if (detalleFecha) detalleFecha.textContent = `${formatearFecha(ev.fecha)} · ${ev.hora}`;
  if (detalleLugar) detalleLugar.textContent = ev.lugar;
  if (detalleModalidad) detalleModalidad.textContent = ev.modalidad === "online" ? "Online" : "Presencial";
  if (detalleDescripcion) detalleDescripcion.textContent = ev.descripcion;

  // Renderizar imagen del evento
  if (detalleImagen) {
    if (ev.imagen) {
      detalleImagen.src = ev.imagen;
      detalleImagen.alt = ev.titulo;
      detalleImagen.style.display = "block";
    } else {
      detalleImagen.style.display = "none";
    }
  }

  // Renderizar etiquetas de accesibilidad si existen
  if (detalleTags && typeof renderAccesibilidad === 'function') {
    detalleTags.innerHTML = renderAccesibilidad(ev.accesibilidad);
  }

  const inscripto = eventosInscripto.includes(ev.id);
  if (detalleEstado) detalleEstado.textContent = inscripto ? "Ya estás anotado a este evento." : "Todavía no estás anotado a este evento.";
  if (btnToggleInscripcion) btnToggleInscripcion.textContent = inscripto ? "Cancelar reserva" : "Reservar entrada";
  if (btnToggleInscripcion) btnToggleInscripcion.className = `btn ${inscripto ? 'btn-danger' : 'btn-primary'}`;

  cambiarVista("detalle");
}