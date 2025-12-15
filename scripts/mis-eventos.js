function renderAccesibilidad(acc) {
  if (!acc) return "";

  const badges = [];
  if (acc.rampas) badges.push(`<span class="badge bg-light text-dark border">♿ Rampas</span>`);
  if (acc.banios) badges.push(`<span class="badge bg-light text-dark border">🚻 Baños accesibles</span>`);
  if (acc.lsa) badges.push(`<span class="badge bg-light text-dark border">🤟 LSA</span>`);
  if (acc.braille) badges.push(`<span class="badge bg-light text-dark border">📖 Braille</span>`);
  if (acc.zonaTranquila) badges.push(`<span class="badge bg-light text-dark border">🧘 Zona tranquila</span>`);

  if (badges.length === 0) return "";
  
  return `<div class="mt-2 d-flex flex-wrap gap-2 justify-content-center">${badges.join('')}</div>`;
}

function renderMisEventos() {
  const lista = document.getElementById("lista-mis-eventos");
  if (!lista) return;

  lista.innerHTML = "";

  const mis = eventos.filter(ev => eventosInscripto.includes(ev.id));

  if (mis.length === 0) {
    lista.innerHTML =
      "<p class='text-muted p-3'>Todavía no te anotaste a ningún evento.</p>";
    return;
  }

  mis.forEach(ev => {
    const item = document.createElement("article");
    item.className = "card mb-3";

    item.innerHTML = `
      <div class="row g-0">
        
        <div class="col-md-4">
          <img
            src="${ev.imagen}"
            alt="Imagen del evento ${ev.titulo}"
            class="img-fluid h-100 rounded-start object-fit-cover"
            style="min-height: 140px;"
          />
        </div>

        <div class="col-md-8">
          <div class="card-body d-flex justify-content-between align-items-start">

            <div class="pe-3">
              <h3 class="h6 mb-1 text-primary">${ev.titulo}</h3>

              <p class="mb-1 text-muted small">
                📅 ${formatearFecha(ev.fecha)} · ${ev.hora} · 📍 ${ev.lugar}
              </p>

              <p class="card-text small text-muted mb-1">
                ${ev.descripcion.substring(0, 120)}...
              </p>

              ${renderAccesibilidad(ev.accesibilidad)}
            </div>

            <div class="d-flex flex-column gap-2">
              <button
                class="btn btn-outline-secondary btn-sm"
                data-detalle-id="${ev.id}"
              >
                Ver detalle
              </button>

              <button
                class="btn btn-outline-danger btn-sm"
                data-inscribir-id="${ev.id}"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    lista.appendChild(item);
  });
}
