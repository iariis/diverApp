function renderExplorarEventos() {
  const texto = buscarEventoInput.value;
  const filtrados = filtrarEventos(eventos, texto, categoriaSeleccionada);

  listaEventos.innerHTML = "";
  if (!filtrados.length) {
    listaEventos.innerHTML =
      "<p class='view-text'>No se encontraron eventos.</p>";
    return;
  }

  filtrados.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "card-evento";
    card.innerHTML = `
      <div class="card-evento-header">${ev.icono || "🎫"}</div>
      <div class="card-evento-body">
        <div class="card-evento-title">${ev.titulo}</div>
        <div class="card-evento-meta">
          ${ev.lugar} · ${formatearFecha(ev.fecha)}
        </div>
        <div class="card-evento-tags">
          <span class="chip-small">Accesible</span>
          ${
            ev.modalidad === "online"
              ? '<span class="chip-small">Online</span>'
              : '<span class="chip-small">Presencial</span>'
          }
        </div>
        <div class="card-evento-actions">
          <button class="btn btn-secondary" data-detalle-id="${ev.id}">
            Ver detalles
          </button>
          <button class="btn btn-primary" data-inscribir-id="${ev.id}">
            ${
              eventosInscritos.includes(ev.id)
                ? "Cancelar"
                : "Reservar entrada"
            }
          </button>
        </div>
      </div>
    `;
    listaEventos.appendChild(card);
  });
}

function renderFavoritos() {
  listaFavoritos.innerHTML = "";

  const favs = eventos.filter((ev) => eventosFavoritos.includes(ev.id));
  if (!favs.length) {
    listaFavoritos.innerHTML =
      "<p class='view-text'>Todavía no tienes eventos favoritos.</p>";
    return;
  }

  favs.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "card-evento";
    card.innerHTML = `
      <div class="card-evento-header">${ev.icono || "🎫"}</div>
      <div class="card-evento-body">
        <div class="card-evento-title">${ev.titulo}</div>
        <div class="card-evento-meta">
          ${ev.lugar} · ${formatearFecha(ev.fecha)}
        </div>
        <div class="card-evento-tags">
          <span class="chip-small">Accesible</span>
        </div>
        <div class="card-evento-actions">
          <button class="btn btn-secondary" data-detalle-id="${ev.id}">
            Ver detalles
          </button>
          <button class="btn btn-secondary" data-favorito-id="${ev.id}">
            Quitar favorito
          </button>
        </div>
      </div>
    `;
    listaFavoritos.appendChild(card);
  });
}

window.renderExplorarEventos = renderExplorarEventos;
window.renderFavoritos = renderFavoritos;
