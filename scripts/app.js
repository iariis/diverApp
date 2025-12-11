/* scripts/app.js
   Render principal y wiring (buscador, nav, clicks).
   Depende de variables/funciones de script.js y filtros.js y otros módulos.
*/

// referencias DOM (pueden ser null si aún no existe)
const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const navButtons = document.querySelectorAll('[data-view]');
const buscarGlobal = document.getElementById("buscar-global");
const listaInicio = document.getElementById("lista-inicio");
const listaEventos = document.getElementById("lista-eventos");
const listaMisEventos = document.getElementById("lista-mis-eventos");
const formCrearEvento = document.getElementById("form-crear-evento");
const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");
const btnVolverLista = document.getElementById("btn-volver-lista");

// vistas map (id -> element)
const views = {
  inicio: document.getElementById("view-inicio"),
  "mis-eventos": document.getElementById("view-mis-eventos"),
  "crear-evento": document.getElementById("view-crear-evento"),
  detalle: document.getElementById("view-detalle")
};

function cambiarVista(nombre) {
  Object.keys(views).forEach((k) => {
    if (!views[k]) return;
    views[k].style.display = (k === nombre) ? "block" : "none";
  });
}

// RENDER: grilla de eventos (lista-eventos) - usa filtrarEventos
function renderEventos() {
  if (!listaEventos) return;
  const texto = buscarGlobal ? buscarGlobal.value : "";
  const filtrados = filtrarEventos(eventos, texto, categoriaSeleccionada);

  listaEventos.innerHTML = "";

  if (filtrados.length === 0) {
    listaEventos.innerHTML = "<p class='text-muted'>No se encontraron eventos.</p>";
    return;
  }

  filtrados.forEach((ev) => {
    const inscripto = eventosInscripto.includes(ev.id);
    const col = document.createElement("article");
    col.className = "col-md-4";

    const imgHtml = ev.imagen ? `<img src="${ev.imagen}" class="card-img-top" alt="${ev.titulo}" style="height:160px;object-fit:cover;">` : "";

    col.innerHTML = `
      <div class="card h-100">
        ${imgHtml}
        <div class="card-body d-flex flex-column">
          <h3 class="h6 mb-2">${ev.titulo}</h3>
          <p class="mb-1 text-muted">📅 ${formatearFecha(ev.fecha)} · ${ev.hora}</p>
          <p class="mb-1 text-muted">📍 ${ev.lugar}</p>
          <p class="small flex-grow-1">${(ev.descripcion||'').substring(0,80)}...</p>
          <div class="d-flex gap-2 mt-2">
            <button class="btn btn-outline-secondary btn-sm" data-detalle-id="${ev.id}">Ver detalle</button>
            <button class="btn btn-sm ${inscripto ? 'btn-danger' : 'btn-primary'}" data-inscribir-id="${ev.id}">${inscripto ? 'Cancelar' : 'Anotarme'}</button>
          </div>
        </div>
      </div>
    `;
    listaEventos.appendChild(col);
  });
}

// RENDER: carrusel horizontal en lista-inicio
function renderCarruselInicio() {
  if (!listaInicio) return;
  listaInicio.innerHTML = "";

  const scroller = document.createElement("div");
  scroller.style.display = "flex";
  scroller.style.gap = "1rem";
  scroller.style.overflowX = "auto";
  scroller.style.paddingBottom = "8px";

  // tomamos los primeros 6 como "próximos"
  const proximos = eventos.slice(0, 6);
  proximos.forEach((ev) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.minWidth = "260px";
    card.style.flex = "0 0 auto";

    const imgHtml = ev.imagen ? `<img src="${ev.imagen}" class="card-img-top" alt="${ev.titulo}" style="height:140px;object-fit:cover;">` : `<div style="height:140px;background:#f5f5f5"></div>`;

    card.innerHTML = `
      ${imgHtml}
      <div class="card-body">
        <h3 class="h6 mb-1">${ev.titulo}</h3>
        <p class="small text-muted mb-1">📅 ${formatearFecha(ev.fecha)}</p>
        <p class="small text-muted mb-2">📍 ${ev.lugar}</p>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-secondary" data-detalle-id="${ev.id}">Ver detalle</button>
          <button class="btn btn-sm btn-primary" data-inscribir-id="${ev.id}">Anotarme</button>
        </div>
      </div>
    `;
    scroller.appendChild(card);
  });

  listaInicio.appendChild(scroller);
}

// renderInicio combina carrusel + grilla
function renderInicio() {
  renderCarruselInicio();
  renderEventos();
}

// RENDER mis eventos — si mis-eventos.js no lo define, fallback
if (typeof renderMisEventos !== "function") {
  function renderMisEventos() {
    if (!listaMisEventos) return;
    listaMisEventos.innerHTML = "";
    const mis = eventos.filter(ev => eventosInscripto.includes(ev.id));
    if (mis.length === 0) {
      listaMisEventos.innerHTML = "<p class='text-muted'>Todavía no te anotaste a ningún evento.</p>";
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
      listaMisEventos.appendChild(item);
    });
  }
}

// Wiring: nav buttons
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let vista = btn.dataset.view;
    // mapear explorar->inicio si aparece por error
    if (vista === "explorar") vista = "inicio";

    // set active
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cambiarVista(vista);

    if (vista === "inicio") { renderInicio(); }
    if (vista === "mis-eventos") { renderMisEventos(); }
    if (vista === "crear-evento") { /* nada extra */ }
  });
});

// search hook
if (buscarGlobal) {
  buscarGlobal.addEventListener("input", () => {
    renderEventos();
  });
}

// Delegación clicks: detalle + inscripcion (funciones en otros archivos)
[listaInicio, listaEventos, listaMisEventos].filter(Boolean).forEach((contenedor) => {
  contenedor.addEventListener("click", (e) => {
    const detalleBtn = e.target.closest("[data-detalle-id]");
    const inscribirBtn = e.target.closest("[data-inscribir-id]");
    if (detalleBtn) {
      const id = parseInt(detalleBtn.getAttribute("data-detalle-id"), 10);
      if (typeof abrirDetalle === "function") abrirDetalle(id);
    }
    if (inscribirBtn) {
      const id = parseInt(inscribirBtn.getAttribute("data-inscribir-id"), 10);
      if (typeof toggleInscripcion === "function") toggleInscripcion(id);
    }
  });
});

// form crear evento (si crear.js no lo maneja)
if (formCrearEvento) {
  formCrearEvento.addEventListener("submit", (e) => {
    e.preventDefault();
    if (typeof guardarNuevoEvento === "function") guardarNuevoEvento();
  });
}

// detalle page buttons
if (btnToggleInscripcion) {
  btnToggleInscripcion.addEventListener("click", () => {
    if (!eventoSeleccionado) return;
    if (typeof toggleInscripcion === "function") toggleInscripcion(eventoSeleccionado.id);
  });
}
if (btnVolverLista) {
  btnVolverLista.addEventListener("click", () => {
    cambiarVista("inicio");
    renderInicio();
  });
}

// Estado inicial: mostrar login (script.js provee mostrarLogin)
if (typeof mostrarLogin === "function") mostrarLogin();
