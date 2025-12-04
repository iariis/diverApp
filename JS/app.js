// Login / logout
btnLogin.addEventListener("click", manejarLogin);
btnLogout.addEventListener("click", manejarLogout);

// Navegación sidebar
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const vista = btn.dataset.view;

    // Estilo activo en Bootstrap
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cambiarVista(vista);

    if (vista === "inicio") renderInicio();
    if (vista === "explorar") renderExplorarEventos();
    if (vista === "mis-eventos") renderMisEventos();
    // Crear evento no necesita render especial
  });
});

// Filtros en explorar
if (buscarEventoInput) {
  buscarEventoInput.addEventListener("input", () => {
    renderExplorarEventos();
  });
}

if (chipsCategorias) {
  chipsCategorias.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;

    categoriaSeleccionada = chip.dataset.cat || "";

    chipsCategorias.querySelectorAll(".chip").forEach((c) => {
      c.classList.remove("active", "btn-primary");
      c.classList.add("btn-outline-primary");
    });

    chip.classList.add("active", "btn-primary");
    chip.classList.remove("btn-outline-primary");

    renderExplorarEventos();
  });
}

// Delegación clicks en listas (inicio + explorar + mis eventos)
[listaInicio, listaEventos, listaMisEventos]
  .filter(Boolean)
  .forEach((contenedor) => {
    contenedor.addEventListener("click", (e) => {
      const detalleBtn = e.target.closest("[data-detalle-id]");
      const inscribirBtn = e.target.closest("[data-inscribir-id]");

      if (detalleBtn) {
        const id = parseInt(detalleBtn.dataset.detalleId, 10);
        abrirDetalle(id);
      }
      if (inscribirBtn) {
        const id = parseInt(inscribirBtn.dataset.inscribirId, 10);
        toggleInscripcion(id);
      }
    });
  });

// Botones detalle
if (btnToggleInscripcion) {
  btnToggleInscripcion.addEventListener("click", () => {
    if (!eventoSeleccionado) return;
    toggleInscripcion(eventoSeleccionado.id);
  });
}

if (btnVolverLista) {
  btnVolverLista.addEventListener("click", () => {
    cambiarVista("explorar");
    renderExplorarEventos();
  });
}

// Form crear evento
if (formCrearEvento) {
  formCrearEvento.addEventListener("submit", (e) => {
    e.preventDefault();
    guardarNuevoEvento();
  });
}

// Render de explorar (usa filtros.js)
function renderExplorarEventos() {
  if (!listaEventos) return;
  const texto = buscarEventoInput ? buscarEventoInput.value : "";
  const filtrados = filtrarEventos(eventos, texto, categoriaSeleccionada);

  listaEventos.innerHTML = "";

  if (filtrados.length === 0) {
    listaEventos.innerHTML =
      "<p class='text-muted'>No se encontraron eventos.</p>";
    return;
  }

  filtrados.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "col-md-4";

    const inscripto = eventosInscripto.includes(ev.id);

    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h3 class="h6 mb-2">${ev.titulo}</h3>
          <p class="mb-1 text-muted">
            📅 ${formatearFecha(ev.fecha)} · ${ev.hora}
          </p>
          <p class="mb-1 text-muted">📍 ${ev.lugar}</p>
          <p class="small flex-grow-1">${ev.descripcion.substring(0, 80)}...</p>
          <div class="d-flex gap-2 mt-2">
            <button
              class="btn btn-outline-secondary btn-sm"
              data-detalle-id="${ev.id}"
            >
              Ver detalle
            </button>
            <button
              class="btn btn-sm ${inscripto ? "btn-danger" : "btn-primary"}"
              data-inscribir-id="${ev.id}"
            >
              ${inscripto ? "Cancelar" : "Anotarme"}
            </button>
          </div>
        </div>
      </div>
    `;

    listaEventos.appendChild(card);
  });
}

// Estado inicial
mostrarLogin();
