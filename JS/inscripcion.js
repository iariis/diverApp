function toggleInscripcion(id) {
  const idx = eventosInscritos.indexOf(id);
  if (idx === -1) {
    eventosInscritos.push(id);
  } else {
    eventosInscritos.splice(idx, 1);
  }

  renderExplorarEventos();
  renderMisEventos();
  renderFavoritos();

  if (eventoSeleccionado && eventoSeleccionado.id === id) {
    abrirDetalle(id);
  }
}

function toggleFavorito(id) {
  const idx = eventosFavoritos.indexOf(id);
  if (idx === -1) {
    eventosFavoritos.push(id);
  } else {
    eventosFavoritos.splice(idx, 1);
  }

  renderExplorarEventos();
  renderFavoritos();

  if (eventoSeleccionado && eventoSeleccionado.id === id) {
    abrirDetalle(id);
  }
}

window.toggleInscripcion = toggleInscripcion;
window.toggleFavorito = toggleFavorito;
