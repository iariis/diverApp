const eventosHardcodeados = [
  {
    id: 1,
    titulo: "Caminata Inclusiva al Río",
    fecha: "2025-12-18",
    hora: "10:00",
    lugar: "Costanera Sur",
    imagen: "img/e2fc6f63-0046-41d4-8f44-7437de2af7ec.jpeg",
    descripcion:
      "Caminata suave por senderos amplios y nivelados junto al río. Cuenta con rampas de acceso, baños accesibles, señalética en braille, intérprete de LSA y zonas de descanso cada 200 metros.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: true,
      zonaTranquila: true,
    },
  },
  {
    id: 2,
    titulo: "Picnic Comunitario Inclusivo",
    fecha: "2025-12-20",
    hora: "16:00",
    lugar: "Parque Centenario",
    imagen: "img/cd2cffdc-7ea1-4d60-aa2f-e5f6fe8da43a.jpeg",
    descripcion:
      "Picnic grupal con estaciones accesibles, mesas adaptadas, menú apto para alergias y zona sensorial tranquila.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 3,
    titulo: "Taller de Arte Sensorial",
    fecha: "2025-12-22",
    hora: "15:00",
    lugar: "Centro Cultural Recoleta",
    imagen: "img/IMG_9631.jpeg",
    descripcion:
      "Taller creativo con materiales táctiles, olores suaves y colores vibrantes.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 4,
    titulo: "Yoga Suave al Aire Libre",
    fecha: "2025-12-26",
    hora: "08:30",
    lugar: "Plaza Alemania",
    imagen: "img/IMG_9633.jpeg",
    descripcion: "Clase de yoga apta para todos los cuerpos y niveles.",
    accesibilidad: {
      rampas: true,
      banios: false,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 5,
    titulo: "Cine Inclusivo Bajo las Estrellas",
    fecha: "2025-12-28",
    hora: "20:30",
    lugar: "Parque Saavedra",
    imagen: "img/IMG_9634.jpeg",
    descripcion:
      "Proyección al aire libre con subtitulado descriptivo y audiodescripción.",
    accesibilidad: {
      rampas: true,
      banios: false,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 6,
    titulo: "Festival de Música Accesible",
    fecha: "2026-01-03",
    hora: "18:00",
    lugar: "Anfiteatro Parque Sarmiento",
    imagen: "img/45a9c8be-94e0-452b-be02-3af5ab9c600b.jpeg",
    descripcion:
      "Festival al aire libre con intérprete de LSA y zonas de descanso.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 7,
    titulo: "Taller de Cerámica Inclusiva",
    fecha: "2026-01-10",
    hora: "14:00",
    lugar: "Museo de Artes del Fuego",
    imagen: "img/b74196fc-b37d-4e26-a682-7ba30f2e1a08.jpeg",
    descripcion:
      "Clase práctica de cerámica con mesas regulables y guía personalizada.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 8,
    titulo: "Salida Fotográfica Inclusiva",
    fecha: "2026-01-18",
    hora: "17:00",
    lugar: "Puerto Madero",
    imagen: "img/13e574b4-5205-48fe-8761-e188533a0cb0.jpeg",
    descripcion:
      "Recorrido guiado con pausas frecuentes y superficies parejas.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: false,
      zonaTranquila: false,
    },
  },
  {
    id: 9,
    titulo: "Jornada de Creación Lúdica Inclusiva",
    fecha: "2026-01-25",
    hora: "16:00",
    lugar: "Centro Comunitario",
    imagen: "img/IMG_9632.jpeg",
    descripcion:
      "Espacio de juego y creación con objetos adaptados para todas las capacidades.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 10,
    titulo: "Danza Contemporánea Inclusiva",
    fecha: "2026-02-01",
    hora: "19:00",
    lugar: "Teatro Parque Patricios",
    imagen: "img/1890d387-fb1f-47d1-acca-95e28f205ded.jpeg",
    descripcion: "Espectáculo accesible con intérprete de LSA y subtítulos.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: false,
      zonaTranquila: true,
    },
  },

  {
    id: 11,
    titulo: "Charla de Neurodiversidad",
    fecha: "2026-02-05",
    hora: "17:00",
    lugar: "Biblioteca Nacional",
    imagen: "img/25f7357f-c62e-47e0-9cfd-b5247d37ee79.jpeg",
    descripcion:
      "Encuentro educativo sobre neurodiversidad, inclusión y salud mental.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: true,
      zonaTranquila: true,
    },
  },
  {
    id: 12,
    titulo: "Huerta Urbana Inclusiva",
    fecha: "2026-02-08",
    hora: "10:30",
    lugar: "Centro Barrial Flores",
    imagen: "img/ef208c4f-7540-4a80-8986-c94018e6f99f.jpeg",
    descripcion:
      "Actividad práctica de jardinería con mesas elevadas y herramientas adaptadas.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 13,
    titulo: "Lectura Colectiva Accesible",
    fecha: "2026-02-12",
    hora: "16:00",
    lugar: "Centro Cultural San Telmo",
    imagen: "img/195ec57d-b129-45e0-8714-71953831a14c.jpeg",
    descripcion:
      "Espacio de lectura compartida con materiales en braille y audiolibros.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: true,
      zonaTranquila: true,
    },
  },
  {
    id: 14,
    titulo: "Taller de Autocuidado",
    fecha: "2026-02-15",
    hora: "15:30",
    lugar: "Espacio Bienestar Sur",
    imagen: "img/A3a43be8-06d3-4da3-861e-4177f6ea3f66.jpeg",
    descripcion:
      "Encuentro para planificar estrategias personales de autocuidado.",
    accesibilidad: {
      rampas: true,
      banios: false,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 15,
    titulo: "Museo Inclusivo Guiado",
    fecha: "2026-02-18",
    hora: "11:00",
    lugar: "Museo Nacional de Bellas Artes",
    imagen: "img/E243d7d6-d5c3-4f13-aea3-25116a6882ff.jpeg",
    descripcion: "Recorrido con explicación sencilla y material táctil.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: true,
      zonaTranquila: false,
    },
  },
  {
    id: 16,
    titulo: "Cocina Inclusiva",
    fecha: "2026-02-20",
    hora: "16:00",
    lugar: "Escuela Gastronómica Popular",
    imagen: "img/61f2da5b-3915-4b3c-bc95-78fb032ff899.jpeg",
    descripcion:
      "Clase participativa con estaciones accesibles y recetas en lectura fácil.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 17,
    titulo: "Círculo de Conversación",
    fecha: "2026-02-22",
    hora: "18:30",
    lugar: "Centro Comunitario Norte",
    imagen: "img/6c42fdb6-b451-4b9c-a467-52b227ebd630.jpeg",
    descripcion:
      "Espacio seguro para compartir experiencias con moderación profesional.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 18,
    titulo: "Teatro Accesible",
    fecha: "2026-02-25",
    hora: "20:00",
    lugar: "Teatro San Martín",
    imagen: "img/9b5a8e40-3493-44ae-b31f-3bddecaf59dd.jpeg",
    descripcion: "Función adaptada con subtítulos, LSA y audiodescripción.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: true,
      braille: false,
      zonaTranquila: true,
    },
  },
  {
    id: 19,
    titulo: "Jornada Deportiva Inclusiva",
    fecha: "2026-03-01",
    hora: "09:30",
    lugar: "Polideportivo Municipal",
    imagen: "img/799c9f89-4290-42b4-88e8-419d7cc3036a.jpeg",
    descripcion: "Actividades físicas adaptadas con profesores especializados.",
    accesibilidad: {
      rampas: true,
      banios: true,
      lsa: false,
      braille: false,
      zonaTranquila: false,
    },
  },
  {
    id: 20,
    titulo: "Meditación Guiada",
    fecha: "2026-03-04",
    hora: "19:00",
    lugar: "Sala Zen Palermo",
    imagen: "img/71a3f90a-8bd6-4069-83c7-12712b51da16.jpeg",
    descripcion: "Sesión de meditación consciente con ambiente controlado.",
    accesibilidad: {
      rampas: true,
      banios: false,
      lsa: false,
      braille: false,
      zonaTranquila: true,
    },
  },
];

// Cargar eventos desde localStorage o usar los hardcodeados como fallback
const eventosGuardados = localStorage.getItem("diverAppEventos");
var eventos = eventosGuardados
  ? JSON.parse(eventosGuardados)
  : eventosHardcodeados;

// ---------- Estado global compartido ----------
var usuarioActual = null;
var eventosInscripto = []; // Se carga al hacer login
var eventoSeleccionado = null;
var categoriaSeleccionada = ""; // filtro actual

// ---------- Utilidades ----------
function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  return f.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// mostrar/ocultar vistas (estas funciones serán llamadas por app.js)
function mostrarLogin() {
  usuarioActual = null;
  eventosInscripto = [];
  const loginView = document.getElementById("login-view");
  const appView = document.getElementById("app-view");
  if (loginView) {
    loginView.classList.remove("d-none");
    loginView.classList.add("d-flex");
  }
  if (appView) {
    appView.classList.add("d-none");
  }
  const emailInput = document.getElementById("email-login");
  const passInput = document.getElementById("password-login");
  const loginError = document.getElementById("login-error");
  if (emailInput) emailInput.value = "";
  if (passInput) passInput.value = "";
  if (loginError) loginError.textContent = "";
}

function mostrarApp() {
  const loginView = document.getElementById("login-view");
  const appView = document.getElementById("app-view");
  if (loginView) {
    loginView.classList.add("d-none");
    loginView.classList.remove("d-flex");
  }
  if (appView) appView.classList.remove("d-none");

  const navUser = document.getElementById("nav-user");
  const navUserEmail = document.getElementById("nav-user-email");
  const topbarAvatar = document.getElementById("topbar-avatar");
  if (navUser) navUser.textContent = usuarioActual || "Usuario";
  if (navUserEmail)
    navUserEmail.textContent = usuarioActual || "usuario@email.com";
  if (topbarAvatar && usuarioActual)
    topbarAvatar.textContent = usuarioActual.charAt(0).toUpperCase();

  cambiarVista("inicio");
  // render inicio (carrusel + grilla)
  if (typeof renderInicio === "function") renderInicio();
}
const inicio = document.getElementById("inicio");
const btnContinuar = document.getElementById("btnContinuar");

if (inicio && btnContinuar) {
  btnContinuar.addEventListener("click", () => {
    inicio.classList.add("d-none");
  });
}