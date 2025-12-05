function abrirDetalle(id) {
  const ev = eventos.find((e) => e.id === id);
  if (!ev) return;

  eventoSeleccionado = ev;

  detalleTitulo.textContent = ev.titulo;
  detalleFecha.textContent = `${formatearFecha(ev.fecha)} · ${ev.hora}`;
  detalleLugar.textContent = ev.lugar;
  detalleModalidad.textContent =
    ev.modalidad === "online" ? "Online" : "Presencial";
  detalleDescripcion.textContent = ev.descripcion;

  detalleTags.innerHTML = `
    <span class="badge bg-primary text-capitalize">${ev.categoria}</span>
    <span class="badge bg-secondary">${ev.modalidad}</span>
  `;

  const inscripto = eventosInscripto.includes(ev.id);
  detalleEstado.textContent = inscripto
    ? "Ya estás anotado a este evento."
    : "Todavía no estás anotado a este evento.";

  btnToggleInscripcion.textContent = inscripto
    ? "Cancelar reserva"
    : "Reservar entrada";

  cambiarVista("detalle");
}
