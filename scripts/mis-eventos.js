/* scripts/mis-eventos.js */
/* Si ya existe la función en app.js no hace falta, pero dejamos la versión */
function renderMisEventos() {
  const lista = document.getElementById("lista-mis-eventos");
  if (!lista) return;
  lista.innerHTML = "";

  const mis = eventos.filter(ev => eventosInscripto.includes(ev.id));
  if (mis.length === 0) {
    lista.innerHTML = "<p class='text-muted'>Todavía no te anotaste a ningún evento.</p>";
    return;
  }

  mis.forEach(ev => {
    const item = document.createElement("article");
    item.className = "card";
    item.innerHTML = `
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h3 class="h6 mb-1">${ev.titulo}</h3>
          <p class="mb-0 text-muted small">📅 ${formatearFecha(ev.fecha)} · ${ev.hora} · 📍 ${ev.lugar}</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-secondary btn-sm" data-detalle-id="${ev.id}">Ver detalle</button>
          <button class="btn btn-outline-danger btn-sm" data-inscribir-id="${ev.id}">Cancelar</button>
        </div>
      </div>
    `;
    lista.appendChild(item);
  });
}
