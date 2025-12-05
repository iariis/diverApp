function toggleInscripcion(id) {
  const index = eventosInscripto.indexOf(id);

  if (index === -1) {
    eventosInscripto.push(id);
  } else {
    eventosInscripto.splice(index, 1);
  }

  // Actualizamos vistas dependientes
  renderInicio();
  renderExplorarEventos();
  renderMisEventos();

  if (eventoSeleccionado && eventoSeleccionado.id === id) {
    abrirDetalle(id); // refresca estado
  }
}
