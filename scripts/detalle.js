/* scripts/detalle.js */
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
  const detalleIcono = document.getElementById("detalle-icono");
  const detalleEstado = document.getElementById("detalle-estado");
  const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");

  if (detalleTitulo) detalleTitulo.textContent = ev.titulo;
  if (detalleFecha) detalleFecha.textContent = `${formatearFecha(ev.fecha)} · ${ev.hora}`;
  if (detalleLugar) detalleLugar.textContent = ev.lugar;
  if (detalleModalidad) detalleModalidad.textContent = ev.modalidad === "online" ? "Online" : "Presencial";
  if (detalleDescripcion) detalleDescripcion.textContent = ev.descripcion;
  if (detalleTags) detalleTags.innerHTML = `<span class="badge bg-primary text-capitalize">${ev.categoria}</span> <span class="badge bg-secondary">${ev.modalidad}</span>`;
  if (detalleIcono) detalleIcono.textContent = "🎵";

  const inscripto = eventosInscripto.includes(ev.id);
  if (detalleEstado) detalleEstado.textContent = inscripto ? "Ya estás anotado a este evento." : "Todavía no estás anotado a este evento.";
  if (btnToggleInscripcion) btnToggleInscripcion.textContent = inscripto ? "Cancelar reserva" : "Reservar entrada";

  cambiarVista("detalle");
}
