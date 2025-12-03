// --------- Datos de ejemplo ---------
const eventos = [
  {
    id: 1,
    titulo: "Taller de lectura inclusiva",
    fecha: "2025-11-28",
    hora: "18:00",
    lugar: "Biblioteca Central",
    categoria: "educativo",
    modalidad: "presencial",
    descripcion:
      "Formación sobre estrategias de lectura comprensiva e inclusiva para docentes y estudiantes.",
  },
  {
    id: 2,
    titulo: "Festival cultural 360",
    fecha: "2025-11-30",
    hora: "16:00",
    lugar: "Plaza Principal",
    categoria: "cultural",
    modalidad: "presencial",
    descripcion:
      "Música, actividades artísticas y recreativas para toda la comunidad.",
  },
  {
    id: 3,
    titulo: "Encuentro deportivo inclusivo",
    fecha: "2025-12-02",
    hora: "10:00",
    lugar: "Polideportivo Municipal",
    categoria: "deportivo",
    modalidad: "presencial",
    descripcion:
      "Jornada con deportes adaptados y actividades en equipo.",
  },
  {
    id: 4,
    titulo: "Charlas sobre IA en educación",
    fecha: "2025-12-05",
    hora: "19:00",
    lugar: "Online",
    categoria: "tecnologico",
    modalidad: "online",
    descripcion:
      "Conversatorio sobre uso responsable de IA en escuelas secundarias.",
  },
];

let usuarioActual = null;
let eventosInscripto = []; // array de IDs
let eventoSeleccionado = null;

// --------- Referencias DOM ---------
const loginView = document.getElementById("login-view");
const appView = document.getElementById("app-view");
const appHeader = document.getElementById("app-header");
const loginError = document.getElementById("login-error");
const navUser = document.getElementById("nav-user");

const btnLogin = document.getElementById("btn-login");
const emailInput = document.getElementById("email-login");
const passInput = document.getElementById("password-login");
const btnLogout = document.getElementById("btn-logout");

const navButtons = document.querySelectorAll(".nav-link[data-view]");
const views = {
  home: document.getElementById("view-home"),
  eventos: document.getElementById("view-eventos"),
  detalle: document.getElementById("view-detalle"),
  "mis-eventos": document.getElementById("view-mis-eventos"),
  "crear-evento": document.getElementById("view-crear-evento"),
};

// Carrusel y listas
const carruselEventos = document.getElementById("carrusel-eventos");
const listaEventos = document.getElementById("lista-eventos");
const listaMisEventos = document.getElementById("lista-mis-eventos");

// Filtros
const buscarInput = document.getElementById("buscar-evento");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroModalidad = document.getElementById("filtro-modalidad");
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");

// Detalle
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleMeta = document.getElementById("detalle-meta");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleExtra = document.getElementById("detalle-extra");
const detalleEstado = document.getElementById("detalle-estado");
const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");
const btnVolverLista = document.getElementById("btn-volver-lista");

// Crear evento
const formCrearEvento = document.getElementById("form-crear-evento");
const crearTitulo = document.getElementById("crear-titulo");
const crearFecha = document.getElementById("crear-fecha");
const crearHora = document.getElementById("crear-hora");
const crearLugar = document.getElementById("crear-lugar");
const crearCategoria = document.getElementById("crear-categoria");
const crearModalidad = document.getElementById("crear-modalidad");
const crearDescripcion = document.getElementById("crear-descripcion");
const crearError = document.getElementById("crear-error");

// --------- Funciones de UI ---------
function mostrarLogin() {
  usuarioActual = null;
  eventosInscripto = [];
  loginView.style.display = "flex";
  appView.style.display = "none";
  appHeader.style.display = "none";
  emailInput.value = "";
  passInput.value = "";
  loginError.textContent = "";
}

function mostrarApp() {
  loginView.style.display = "none";
  appView.style.display = "block";
  appHeader.style.display = "flex";
  navUser.textContent = usuarioActual ? usuarioActual : "";
  cambiarVista("home");
  renderCarrusel();
  renderListaEventos();
  renderMisEventos();
}

function cambiarVista(nombreVista) {
  Object.keys(views).forEach((key) => {
    views[key].style.display = key === nombreVista ? "block" : "none";
  });
}

function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  return f.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// --------- Render de carrusel ---------
function renderCarrusel() {
  carruselEventos.innerHTML = "";
  eventos.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "tarjeta-evento";
    card.innerHTML = `
      <div>
        <h3>${ev.titulo}</h3>
        <div class="evento-meta">
          <div>📅 ${formatearFecha(ev.fecha)} · ${ev.hora} hs</div>
          <div>📍 ${ev.lugar}</div>
          <div>🎭 ${ev.categoria.charAt(0).toUpperCase() + ev.categoria.slice(1)}</div>
        </div>
        <p class="texto-secundario">
          ${ev.descripcion.substring(0, 90)}...
        </p>
      </div>
      <div class="evento-footer">
        <button class="btn btn-secundario" data-detalle-id="${ev.id}">
          Ver detalle
        </button>
        <button class="btn btn-primario" data-toggle-id="${ev.id}">
          ${eventosInscripto.includes(ev.id) ? "Des-anotarme" : "Anotarme"}
        </button>
      </div>
    `;
    carruselEventos.appendChild(card);
  });
}

// --------- Render lista eventos (con filtros) ---------
function renderListaEventos() {
  // Obtenemos los valores de los filtros
  const texto = buscarInput.value;
  const cat = filtroCategoria.value;
  const mod = filtroModalidad.value;

  // Usamos la función del archivo filtro.js
  const filtrados = filtrarEventos(eventos, texto, cat, mod);
  listaEventos.innerHTML = "";

  if (filtrados.length === 0) {
    listaEventos.innerHTML =
      "<p class='texto-secundario'>No se encontraron eventos.</p>";
    return;
  }

  filtrados.forEach((ev) => {
    const item = document.createElement("article");
    item.className = "item-evento";
    item.innerHTML = `
      <div>
        <h3>${ev.titulo}</h3>
        <div class="item-evento-meta">
          📅 ${formatearFecha(ev.fecha)} · ${ev.hora} hs · 📍 ${ev.lugar}
        </div>
        <p class="texto-secundario">
          ${ev.descripcion.substring(0, 120)}...
        </p>
      </div>
      <div class="item-evento-acciones">
        <button class="btn btn-secundario" data-detalle-id="${ev.id}">
          Ver detalle
        </button>
        <button class="btn btn-primario" data-toggle-id="${ev.id}">
          ${eventosInscripto.includes(ev.id) ? "Des-anotarme" : "Anotarme"}
        </button>
      </div>
    `;
    listaEventos.appendChild(item);
  });
}

// --------- Render "Mis eventos" ---------
function renderMisEventos() {
  listaMisEventos.innerHTML = "";

  const mis = eventos.filter((ev) => eventosInscripto.includes(ev.id));

  if (mis.length === 0) {
    listaMisEventos.innerHTML =
      "<p class='texto-secundario'>Todavía no te anotaste a ningún evento.</p>";
    return;
  }

  mis.forEach((ev) => {
    const item = document.createElement("article");
    item.className = "mis-evento-item";
    item.innerHTML = `
      <div>
        <h3>${ev.titulo}</h3>
        <div class="mis-evento-meta">
          📅 ${formatearFecha(ev.fecha)} · ${ev.hora} hs · 📍 ${ev.lugar}
        </div>
        <span class="estado-chip">Próximo</span>
      </div>
      <div class="mis-evento-acciones">
        <button class="btn btn-secundario" data-detalle-id="${ev.id}">
          Ver detalle
        </button>
        <button class="btn btn-primario" data-toggle-id="${ev.id}">
          Des-anotarme
        </button>
      </div>
    `;
    listaMisEventos.appendChild(item);
  });
}

// --------- Detalle de evento ---------
function abrirDetalle(id) {
  const ev = eventos.find((e) => e.id === id);
  if (!ev) return;

  eventoSeleccionado = ev;

  detalleTitulo.textContent = ev.titulo;
  detalleMeta.innerHTML = `
    <span>📅 ${formatearFecha(ev.fecha)}</span>
    <span>⏰ ${ev.hora} hs</span>
    <span>📍 ${ev.lugar}</span>
    <span>🎭 ${ev.categoria.charAt(0).toUpperCase() + ev.categoria.slice(1)}</span>
    <span>💻 Modalidad: ${ev.modalidad}</span>
  `;
  detalleDescripcion.textContent = ev.descripcion;
  detalleExtra.innerHTML = `
    <li>Organiza: Programa diverApp</li>
    <li>Modalidad: ${ev.modalidad === "online" ? "Online" : "Presencial"}</li>
  `;

  const inscripto = eventosInscripto.includes(ev.id);
  detalleEstado.innerHTML = inscripto
    ? "<strong>Ya estás anotado a este evento.</strong>"
    : "Todavía no estás anotado a este evento.";
  btnToggleInscripcion.textContent = inscripto
    ? "Des-anotarme"
    : "Anotarme al evento";

  cambiarVista("detalle");
}

function toggleInscripcion(id) {
  const index = eventosInscripto.indexOf(id);
  if (index === -1) {
    eventosInscripto.push(id);
  } else {
    eventosInscripto.splice(index, 1);
  }
  renderCarrusel();
  renderListaEventos();
  renderMisEventos();

  if (eventoSeleccionado && eventoSeleccionado.id === id) {
    abrirDetalle(id); // refresca estado en detalle
  }
}

// --------- Crear evento ---------
function guardarNuevoEvento() {
  crearError.textContent = "";

  // 1. Obtener valores del formulario
  const titulo = crearTitulo.value.trim();
  const fecha = crearFecha.value;
  const hora = crearHora.value;
  const lugar = crearLugar.value.trim();
  const categoria = crearCategoria.value;
  const modalidad = crearModalidad.value;
  const descripcion = crearDescripcion.value.trim();

  // 2. Validar que no estén vacíos
  if (!titulo || !fecha || !hora || !lugar || !descripcion) {
    crearError.textContent = "Por favor, completá todos los campos.";
    return;
  }

  // 3. Crear el nuevo objeto de evento
  const nuevoEvento = {
    id: Date.now(), // Usamos Date.now() para un ID único simple
    titulo,
    fecha,
    hora,
    lugar,
    categoria,
    modalidad,
    descripcion,
  };

  // 4. Añadirlo al array de eventos y actualizar la UI
  eventos.unshift(nuevoEvento); // unshift() lo añade al principio
  renderCarrusel();
  renderListaEventos();
  formCrearEvento.reset(); // Limpiar el formulario
  cambiarVista("eventos"); // Llevar al usuario a la lista para que vea su evento
}

// Filtros
[buscarInput, filtroCategoria, filtroModalidad].forEach((el) => {
  el.addEventListener("input", () => {
    renderListaEventos();
  });
});

btnLimpiarFiltros.addEventListener("click", () => {
  buscarInput.value = "";
  filtroCategoria.value = "";
  filtroModalidad.value = "";
  renderListaEventos();
});

// Delegación clicks en carrusel, lista y mis eventos
[carruselEventos, listaEventos, listaMisEventos].forEach((contenedor) => {
  contenedor.addEventListener("click", (e) => {
    const detalleBtn = e.target.closest("[data-detalle-id]");
    const toggleBtn = e.target.closest("[data-toggle-id]");

    if (detalleBtn) {
      const id = parseInt(detalleBtn.getAttribute("data-detalle-id"), 10);
      abrirDetalle(id);
    }

    if (toggleBtn) {
      const id = parseInt(toggleBtn.getAttribute("data-toggle-id"), 10);
      toggleInscripcion(id);
    }
  });
});

// Botones detalle
btnToggleInscripcion.addEventListener("click", () => {
  if (!eventoSeleccionado) return;
  toggleInscripcion(eventoSeleccionado.id);
});

btnVolverLista.addEventListener("click", () => {
  cambiarVista("eventos");
});

// Botón guardar evento
formCrearEvento.addEventListener("submit", () => {
  guardarNuevoEvento();
});
