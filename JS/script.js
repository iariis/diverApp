// =============== DATOS DE EJEMPLO ===============
const eventos = [
  {
    id: 1,
    titulo: "Concierto inclusivo en el parque",
    categoria: "musica",
    fecha: "2025-12-10",
    hora: "19:30",
    lugar: "Parque Central",
    modalidad: "presencial",
    descripcion: "Concierto al aire libre con intérprete de lengua de señas.",
  },
  {
    id: 2,
    titulo: "Muestra de arte accesible",
    categoria: "arte",
    fecha: "2025-12-12",
    hora: "17:00",
    lugar: "Museo Municipal",
    modalidad: "presencial",
    descripcion: "Recorrido guiado con audiodescripción y folletería en braille.",
  },
  {
    id: 3,
    titulo: "Torneo de deporte adaptado",
    categoria: "deporte",
    fecha: "2025-12-15",
    hora: "10:00",
    lugar: "Polideportivo Nº 3",
    modalidad: "presencial",
    descripcion: "Jornada deportiva con distintas disciplinas adaptadas.",
  },
  {
    id: 4,
    titulo: "Obra de teatro inclusiva",
    categoria: "teatro",
    fecha: "2025-12-20",
    hora: "20:00",
    lugar: "Teatro Independencia",
    modalidad: "presencial",
    descripcion: "Obra con subtítulos y bucle magnético.",
  },
];

// =============== ESTADO GLOBAL ===============
let usuarioActual = null;
let eventosInscripto = []; // array de IDs de eventos
let eventoSeleccionado = null;
let categoriaSeleccionada = "";

// =============== REFERENCIAS DOM ===============
const loginView = document.getElementById("login-view");
const appView = document.getElementById("app-view");

const emailInput = document.getElementById("email-login");
const passInput = document.getElementById("password-login");
const loginError = document.getElementById("login-error");

const navUser = document.getElementById("nav-user");
const navUserEmail = document.getElementById("nav-user-email");
const topbarAvatar = document.getElementById("topbar-avatar");

const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");

const navButtons = document.querySelectorAll(".nav-item[data-view]");

// Vistas
const views = {
  inicio: document.getElementById("view-inicio"),
  explorar: document.getElementById("view-explorar"),
  "mis-eventos": document.getElementById("view-mis-eventos"),
  "crear-evento": document.getElementById("view-crear-evento"),
  detalle: document.getElementById("view-detalle"),
};

// Listas y filtros
const listaInicio = document.getElementById("lista-inicio");
const listaEventos = document.getElementById("lista-eventos");
const listaMisEventos = document.getElementById("lista-mis-eventos");

const buscarEventoInput = document.getElementById("buscar-evento");
const chipsCategorias = document.getElementById("chips-categorias");

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

// Detalle
const btnVolverLista = document.getElementById("btn-volver-lista");
const btnToggleInscripcion = document.getElementById("btn-toggle-inscripcion");
const detalleIcono = document.getElementById("detalle-icono");
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleTags = document.getElementById("detalle-tags");
const detalleFecha = document.getElementById("detalle-fecha");
const detalleLugar = document.getElementById("detalle-lugar");
const detalleModalidad = document.getElementById("detalle-modalidad");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleEstado = document.getElementById("detalle-estado");

// =============== FUNCIONES GENERALES ===============
function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  return f.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function mostrarLogin() {
  usuarioActual = null;
  eventosInscripto = [];

  loginView.classList.remove("d-none");
  loginView.classList.add("d-flex");

  appView.classList.add("d-none");

  emailInput.value = "";
  passInput.value = "";
  loginError.textContent = "";
}

function mostrarApp() {
  loginView.classList.add("d-none");
  loginView.classList.remove("d-flex");

  appView.classList.remove("d-none");

  if (navUser) navUser.textContent = usuarioActual || "Usuario";
  if (navUserEmail) navUserEmail.textContent = usuarioActual || "usuario@email.com";
  if (topbarAvatar && usuarioActual) {
    topbarAvatar.textContent = usuarioActual.charAt(0).toUpperCase();
  }

  cambiarVista("inicio");
  renderInicio();
}

// Cambiar entre vistas
function cambiarVista(nombreVista) {
  Object.keys(views).forEach((key) => {
    if (!views[key]) return;
    views[key].style.display = key === nombreVista ? "block" : "none";
  });
}
