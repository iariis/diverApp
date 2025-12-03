// Datos de ejemplo
const eventos = [
  {
    id: 1,
    titulo: "Concierto Accesible",
    fecha: "2024-12-10",
    hora: "20:00",
    lugar: "Auditorio Nacional",
    categoria: "musica",
    modalidad: "presencial",
    icono: "🎵",
    descripcion:
      "Concierto sensorial con elementos visuales, táctiles y sonoros, diseñado para ser accesible a todas las personas.",
    accesibilidad: ["Accesible", "Bucle magnético"],
  },
  {
    id: 2,
    titulo: "Exposición Táctil",
    fecha: "2024-12-12",
    hora: "18:00",
    lugar: "Museo de Arte",
    categoria: "arte",
    modalidad: "presencial",
    icono: "🎨",
    descripcion:
      "Muestras de arte táctil con audioguías para personas con discapacidad visual.",
    accesibilidad: ["Accesible", "Audioguías"],
  },
  {
    id: 3,
    titulo: "Partido Inclusivo",
    fecha: "2024-12-15",
    hora: "19:00",
    lugar: "Estadio Municipal",
    categoria: "deporte",
    modalidad: "presencial",
    icono: "⚽",
    descripcion:
      "Evento deportivo adaptado con intérprete de lengua de señas y espacios accesibles.",
    accesibilidad: ["Accesible", "Guía permitida"],
  },
  {
    id: 4,
    titulo: "Cine Accesible",
    fecha: "2024-12-20",
    hora: "21:00",
    lugar: "Cines Capitol",
    categoria: "cine",
    modalidad: "presencial",
    icono: "🎬",
    descripcion:
      "Proyección de película con subtítulos descriptivos y audiodescripción.",
    accesibilidad: ["Accesible", "Audiodescripción"],
  },
];

let usuarioActual = null;
let usuarioEmailActual = null;
let eventosInscritos = []; // IDs
let eventosFavoritos = []; // IDs
let eventoSeleccionado = null;

// Referencias DOM compartidas
const loginView = document.getElementById("login-view");
const appView = document.getElementById("app-view");

const navUser = document.getElementById("nav-user");
const navUserEmail = document.getElementById("nav-user-email");
const topbarAvatar = document.getElementById("topbar-avatar");

// sidebar & vistas
const navButtons = document.querySelectorAll(".nav-item[data-view]");
const views = {
  "inicio": document.getElementById("view-inicio"),
  "explorar": document.getElementById("view-explorar"),
  "favoritos": document.getElementById("view-favoritos"),
  "mis-eventos": document.getElementById("view-mis-eventos"),
  "crear-evento": document.getElementById("view-crear-evento"),
  "accesibilidad": document.getElementById("view-accesibilidad"),
  "perfil": document.getElementById("view-perfil"),
  "detalle": document.getElementById("view-detalle"),
};

// listas
const listaEventos = document.getElementById("lista-eventos");
const listaFavoritos = document.getElementById("lista-favoritos");
const listaMisEventos = document.getElementById("lista-mis-eventos");

// filtros explorar
const buscarEventoInput = document.getElementById("buscar-evento");
const chipsCategorias = document.getElementById("chips-categorias");
let categoriaSeleccionada = "";

// detalle
const detalleIcono = document.getElementById("detalle-icono");
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleTags = document.getElementById("detalle-tags");
const detalleFecha = document.getElementById("detalle-fecha");
const detalleLugar = document.getElementById("detalle-lugar");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleAccesibilidad = document.getElementById("detalle-accesibilidad");
const detalleEstado = document.getElementById("detalle-estado");
const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");
const btnToggleFavorito = document.getElementById("btn-toggle-favorito");
const btnVolverLista = document.getElementById("btn-volver-lista");

// crear evento
const formCrearEvento = document.getElementById("form-crear-evento");
const crearTitulo = document.getElementById("crear-titulo");
const crearFecha = document.getElementById("crear-fecha");
const crearHora = document.getElementById("crear-hora");
const crearLugar = document.getElementById("crear-lugar");
const crearCategoria = document.getElementById("crear-categoria");
const crearModalidad = document.getElementById("crear-modalidad");
const crearDescripcion = document.getElementById("crear-descripcion");
const crearError = document.getElementById("crear-error");

// login
const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const emailInput = document.getElementById("email-login");
const passInput = document.getElementById("password-login");
const loginError = document.getElementById("login-error");

// Helpers
function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  return f.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function inicialAvatar(nombre) {
  if (!nombre) return "U";
  return nombre.trim().charAt(0).toUpperCase();
}

function cambiarVista(vista) {
  Object.keys(views).forEach((k) => {
    views[k].style.display = k === vista ? "block" : "none";
  });

  navButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === vista);
  });
}

function mostrarLogin() {
  usuarioActual = null;
  usuarioEmailActual = null;
  eventosInscritos = [];
  eventosFavoritos = [];
  loginView.style.display = "flex";
  appView.style.display = "none";
  loginError.textContent = "";
  emailInput.value = "";
  passInput.value = "";
}

function mostrarApp() {
  loginView.style.display = "none";
  appView.style.display = "grid";
  navUser.textContent = usuarioActual || "Usuario";
  navUserEmail.textContent = usuarioEmailActual || "";
  topbarAvatar.textContent = inicialAvatar(usuarioActual);
  cambiarVista("explorar");
}
