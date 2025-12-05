function renderInicio() {
  if (!listaInicio) return;
  listaInicio.innerHTML = "";

  // Tomamos los 3 primeros eventos como ejemplo
  const proximos = eventos.slice(0, 3);

  proximos.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h3 class="h6 mb-2">${ev.titulo}</h3>
          <p class="mb-1 text-muted">
            📅 ${formatearFecha(ev.fecha)} · ${ev.hora}
          </p>
          <p class="mb-1 text-muted">📍 ${ev.lugar}</p>
          <p class="small flex-grow-1">${ev.descripcion.substring(0, 80)}...</p>
          <button
            class="btn btn-outline-primary btn-sm mt-2"
            data-detalle-id="${ev.id}"
          >
            Ver detalle
          </button>
        </div>
      </div>
    `;

    listaInicio.appendChild(card);
  });
}
