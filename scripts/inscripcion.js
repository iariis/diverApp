/* scripts/inscripcion.js */
function toggleInscripcion(id) {
  const idx = eventosInscripto.indexOf(id);
  if (idx === -1) {
    eventosInscripto.push(id);
  } else {
    eventosInscripto.splice(idx, 1);
  }

  // refrescar UI
  if (typeof renderCarruselInicio === "function") renderCarruselInicio();
  if (typeof renderEventos === "function") renderEventos();
  if (typeof renderMisEventos === "function") renderMisEventos();

  // si el detalle está abierto y es el mismo evento, reabrir para actualizar texto
  if (eventoSeleccionado && eventoSeleccionado.id === id && typeof abrirDetalle === "function") {
    abrirDetalle(id);
  }
}
