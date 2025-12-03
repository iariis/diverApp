function renderMisEventos() {
  listaMisEventos.innerHTML = "";

  const mis = eventos.filter((ev) => eventosInscritos.includes(ev.id));
  if (!mis.length) {
    listaMisEventos.innerHTML =
      "<p class='view-text'>Todavía no te anotaste a ningún evento.</p>";
    return;
  }

  mis.forEach((ev) => {
    const row = document.createElement("article");
    row.className = "item-mis-evento";
    row.innerHTML = `
      <div class="item-mis-evento-main">
        <div class="item-mis-evento-icon">${ev.icono || "🎫"}</div>
        <div>
          <div>${ev.titulo}</div>
          <div class="item-mis-evento-meta">
            ${ev.lugar} · ${formatearFecha(ev.fecha)} · ${ev.hora}
          </div>
        </div>
      </div>
      <div class="item-mis-evento-actions">
        <button class="btn btn-secondary" data-detalle-id="${ev.id}">
          Ver detalles
        </button>
        <button class="btn btn-ghost" data-inscribir-id="${ev.id}">
          Cancelar
        </button>
      </div>
    `;
    listaMisEventos.appendChild(row);
  });
}

window.renderMisEventos = renderMisEventos;
