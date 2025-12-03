// Login / logout
btnLogin.addEventListener("click", manejarLogin);
btnLogout.addEventListener("click", manejarLogout);

// Navegación sidebar
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const vista = btn.dataset.view;
    cambiarVista(vista);

    if (vista === "explorar") renderExplorarEventos();
    if (vista === "favoritos") renderFavoritos();
    if (vista === "mis-eventos") renderMisEventos();
  });
});

// Filtros explorar
buscarEventoInput.addEventListener("input", () => {
  renderExplorarEventos();
});

chipsCategorias.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;

  categoriaSeleccionada = chip.dataset.cat || "";

  chipsCategorias
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("is-active"));
  chip.classList.add("is-active");

  renderExplorarEventos();
});

// Delegación clicks en tarjetas (explorar + favoritos + mis eventos)
[listaEventos, listaFavoritos, listaMisEventos].forEach((contenedor) => {
  contenedor.addEventListener("click", (e) => {
    const detalleBtn = e.target.closest("[data-detalle-id]");
    const inscribirBtn = e.target.closest("[data-inscribir-id]");
    const favBtn = e.target.closest("[data-favorito-id]");

    if (detalleBtn) {
      const id = parseInt(detalleBtn.dataset.detalleId, 10);
      abrirDetalle(id);
    }
    if (inscribirBtn) {
      const id = parseInt(inscribirBtn.dataset.inscribirId, 10);
      toggleInscripcion(id);
    }
    if (favBtn) {
      const id = parseInt(favBtn.dataset.favoritoId, 10);
      toggleFavorito(id);
    }
  });
});

// Botones detalle
btnToggleInscripcion.addEventListener("click", () => {
  if (!eventoSeleccionado) return;
  toggleInscripcion(eventoSeleccionado.id);
});

btnToggleFavorito.addEventListener("click", () => {
  if (!eventoSeleccionado) return;
  toggleFavorito(eventoSeleccionado.id);
});

btnVolverLista.addEventListener("click", () => {
  cambiarVista("explorar");
});

// Crear evento
formCrearEvento.addEventListener("submit", guardarNuevoEvento);

// Estado inicial
mostrarLogin();
