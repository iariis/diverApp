
const eventos = [
  {
    id: 1,
    titulo: "Caminata Inclusiva al Río",
    fecha: "2025-12-18",
    hora: "10:00",
    lugar: "Costanera Sur",
    imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
    descripcion: "Caminata suave por senderos amplios y nivelados junto al río. Cuenta con rampas de acceso, baños accesibles, señalética en braille, intérprete de LSA y zonas de descanso cada 200 metros.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: true, zonaTranquila: true }
  },
  {
    id: 2,
    titulo: "Picnic Comunitario Inclusivo",
    fecha: "2025-12-20",
    hora: "16:00",
    lugar: "Parque Centenario",
    imagen: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    descripcion: "Picnic grupal con estaciones accesibles, mesas adaptadas, menú apto para alergias y zona sensorial tranquila.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  },
  {
    id: 3,
    titulo: "Taller de Arte Sensorial",
    fecha: "2025-12-22",
    hora: "15:00",
    lugar: "Centro Cultural Recoleta",
    imagen: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    descripcion: "Taller creativo con materiales táctiles, colores y estímulos suaves, en un entorno accesible.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },
  {
    id: 4,
    titulo: "Yoga Suave al Aire Libre",
    fecha: "2025-12-26",
    hora: "08:30",
    lugar: "Plaza Alemania",
    imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    descripcion: "Clase de yoga inclusiva, con opciones adaptadas, ritmo pausado y espacio accesible.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: true }
  },
  {
    id: 5,
    titulo: "Cine Inclusivo Bajo las Estrellas",
    fecha: "2025-12-28",
    hora: "20:30",
    lugar: "Parque Saavedra",
    imagen: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=600&fit=crop",
    descripcion: "Proyección al aire libre con subtitulado descriptivo, audiodescripción y sonido balanceado.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: true }
  },
  {
    id: 6,
    titulo: "Festival de Música Accesible",
    fecha: "2026-01-03",
    hora: "18:00",
    lugar: "Anfiteatro Parque Sarmiento",
    imagen: "https://images.unsplash.com/photo-1518972559570-9a093c0a6aaf?w=800&h=600&fit=crop",
    descripcion: "Festival con intérprete de LSA, tarimas accesibles y zonas de descanso sensorial.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  },

  {
    id: 7,
    titulo: "Taller de Cerámica Inclusiva",
    fecha: "2026-01-10",
    hora: "14:00",
    lugar: "Museo de Artes del Fuego",
    imagen: "https://images.unsplash.com/photo-1507668077129-56a7f6f54b8e?w=800&h=600&fit=crop",
    descripcion: "Cerámica guiada con mesas regulables y acompañamiento personalizado.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 8,
    titulo: "Salida Fotográfica Inclusiva",
    fecha: "2026-01-18",
    hora: "17:00",
    lugar: "Puerto Madero",
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    descripcion: "Recorrido guiado con pausas frecuentes y apoyo para personas con baja visión.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: false }
  },

  {
    id: 9,
    titulo: "Noche de Planetario Accesible",
    fecha: "2026-01-25",
    hora: "21:00",
    lugar: "Planetario Galileo Galilei",
    imagen: "https://images.unsplash.com/photo-1508261303786-0e1a9f79c3d3?w=800&h=600&fit=crop",
    descripcion: "Función adaptada con audiodescripción y material táctil previo.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: true, zonaTranquila: true }
  },

  {
    id: 10,
    titulo: "Danza Contemporánea Inclusiva",
    fecha: "2026-02-01",
    hora: "19:00",
    lugar: "Teatro Parque Patricios",
    imagen: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
    descripcion: "Espectáculo accesible con intérprete de LSA y espacio adaptado.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  },

  {
    id: 11,
    titulo: "Charla de Neurodiversidad",
    fecha: "2026-02-05",
    hora: "17:00",
    lugar: "Biblioteca Nacional",
    imagen: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
    descripcion: "Encuentro educativo sobre inclusión, con lenguaje claro y material accesible.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: true, zonaTranquila: true }
  },

  {
    id: 12,
    titulo: "Huerta Urbana Inclusiva",
    fecha: "2026-02-08",
    hora: "10:30",
    lugar: "Centro Barrial Flores",
    imagen: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop",
    descripcion: "Jardinería accesible con herramientas adaptadas y mesas elevadas.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 13,
    titulo: "Lectura Colectiva Accesible",
    fecha: "2026-02-12",
    hora: "18:00",
    lugar: "Casa de la Lectura",
    imagen: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=600&fit=crop",
    descripcion: "Lectura con braille, audiolibro en vivo y ritmo respetuoso.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: true, zonaTranquila: true }
  },

  {
    id: 14,
    titulo: "Taller de Autocuidado",
    fecha: "2026-02-15",
    hora: "15:30",
    lugar: "Espacio Bienestar Sur",
    imagen: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=800&h=600&fit=crop",
    descripcion: "Encuentro de respiración y conciencia corporal en ambiente tranquilo.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 15,
    titulo: "Museo Inclusivo Guiado",
    fecha: "2026-02-18",
    hora: "11:00",
    lugar: "Museo Nacional de Bellas Artes",
    imagen: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop",
    descripcion: "Recorrido guiado con material táctil e intérprete de LSA.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: true, zonaTranquila: false }
  },

  {
    id: 16,
    titulo: "Cocina Inclusiva",
    fecha: "2026-02-20",
    hora: "16:00",
    lugar: "Escuela Gastronómica Popular",
    imagen: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
    descripcion: "Clase participativa con recetas en lectura fácil.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 17,
    titulo: "Círculo de Conversación",
    fecha: "2026-02-22",
    hora: "18:30",
    lugar: "Centro Comunitario Norte",
    imagen: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    descripcion: "Espacio seguro para compartir experiencias con moderación profesional.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 18,
    titulo: "Teatro Accesible",
    fecha: "2026-02-25",
    hora: "20:00",
    lugar: "Teatro San Martín",
    imagen: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=600&fit=crop",
    descripcion: "Función adaptada con subtítulos y audiodescripción.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  },

  {
    id: 19,
    titulo: "Jornada Deportiva Inclusiva",
    fecha: "2026-03-01",
    hora: "09:30",
    lugar: "Polideportivo Municipal",
    imagen: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?w=800&h=600&fit=crop",
    descripcion: "Actividades físicas adaptadas con profesores especializados.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 20,
    titulo: "Meditación Guiada",
    fecha: "2026-03-04",
    hora: "19:00",
    lugar: "Sala Zen Palermo",
    imagen: "https://images.unsplash.com/photo-1506123317848-65cc8d69f1a0?w=800&h=600&fit=crop",
    descripcion: "Sesión de meditación consciente con opciones adaptadas.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 21,
    titulo: "Feria Inclusiva",
    fecha: "2026-03-07",
    hora: "12:00",
    lugar: "Plaza Dorrego",
    imagen: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop",
    descripcion: "Feria de emprendimientos con pasillos amplios.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 22,
    titulo: "Capacitación Digital",
    fecha: "2026-03-10",
    hora: "17:00",
    lugar: "Punto Digital Barracas",
    imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    descripcion: "Introducción a herramientas digitales con apoyo personalizado.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: true, zonaTranquila: true }
  },

  {
    id: 23,
    titulo: "Cine Sensorial",
    fecha: "2026-03-12",
    hora: "18:00",
    lugar: "Centro Cultural Sur",
    imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    descripcion: "Proyección con luces bajas y volumen moderado.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 24,
    titulo: "Encuentro de Jóvenes",
    fecha: "2026-03-15",
    hora: "16:30",
    lugar: "Centro Juvenil Oeste",
    imagen: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    descripcion: "Actividad recreativa con dinámicas accesibles.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 25,
    titulo: "Arte Terapia",
    fecha: "2026-03-18",
    hora: "15:00",
    lugar: "Fundación Crear",
    imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop",
    descripcion: "Expresión artística con acompañamiento emocional.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 26,
    titulo: "Taller de Música",
    fecha: "2026-03-20",
    hora: "18:00",
    lugar: "Escuela Popular de Música",
    imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    descripcion: "Exploración sonora con instrumentos accesibles.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 27,
    titulo: "Encuentro Ambiental",
    fecha: "2026-03-23",
    hora: "10:00",
    lugar: "Reserva Ecológica",
    imagen: "https://images.unsplash.com/photo-1500534314209-a26db0f5c6f3?w=800&h=600&fit=crop",
    descripcion: "Recorrido accesible sobre cuidado ambiental.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 28,
    titulo: "Fotografía con Celular",
    fecha: "2026-03-26",
    hora: "17:30",
    lugar: "Centro Cultural Abasto",
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    descripcion: "Taller práctico con explicaciones simples.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 29,
    titulo: "Charla Motivacional",
    fecha: "2026-03-28",
    hora: "19:00",
    lugar: "Auditorio Central",
    imagen: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    descripcion: "Charla inspiradora con lenguaje claro.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  },

  {
    id: 30,
    titulo: "Encuentro Creativo",
    fecha: "2026-03-30",
    hora: "16:00",
    lugar: "Espacio Arte Libre",
    imagen: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
    descripcion: "Espacio abierto de creación colectiva.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 31,
    titulo: "Café Inclusivo",
    fecha: "2026-04-02",
    hora: "17:00",
    lugar: "Café Cultural",
    imagen: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop",
    descripcion: "Encuentro social en ambiente accesible.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 32,
    titulo: "Taller de Escritura",
    fecha: "2026-04-05",
    hora: "18:00",
    lugar: "Casa de la Cultura",
    imagen: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=600&fit=crop",
    descripcion: "Escritura creativa con consignas claras.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: true, zonaTranquila: true }
  },

  {
    id: 33,
    titulo: "Mindfulness",
    fecha: "2026-04-08",
    hora: "19:30",
    lugar: "Sala Serena",
    imagen: "https://images.unsplash.com/photo-1504198266285-1659872e6590?w=800&h=600&fit=crop",
    descripcion: "Práctica consciente con guía calmada.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 34,
    titulo: "Juego Cooperativo",
    fecha: "2026-04-10",
    hora: "16:00",
    lugar: "Centro Lúdico",
    imagen: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
    descripcion: "Juegos colaborativos sin competencia.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 35,
    titulo: "Encuentro Artístico",
    fecha: "2026-04-12",
    hora: "15:00",
    lugar: "Galería Abierta",
    imagen: "https://images.unsplash.com/photo-1500534314209-a26db0f5c6f3?w=800&h=600&fit=crop",
    descripcion: "Exposición interactiva con guías accesibles.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: true, zonaTranquila: true }
  },

  {
    id: 36,
    titulo: "Clase de Baile Libre",
    fecha: "2026-04-15",
    hora: "18:30",
    lugar: "Salón Movimiento",
    imagen: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    descripcion: "Movimiento libre con opciones adaptadas.",
    accesibilidad: { rampas: true, banios: false, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 37,
    titulo: "Charla de Salud Integral",
    fecha: "2026-04-18",
    hora: "17:30",
    lugar: "Centro de Salud Comunitario",
    imagen: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
    descripcion: "Información clara sobre bienestar físico y mental.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: true, zonaTranquila: true }
  },

  {
    id: 38,
    titulo: "Encuentro Familiar",
    fecha: "2026-04-20",
    hora: "12:00",
    lugar: "Parque Avellaneda",
    imagen: "https://images.unsplash.com/photo-1501959915551-4e8a04a3e7a7?w=800&h=600&fit=crop",
    descripcion: "Actividad recreativa para todas las edades.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: false }
  },

  {
    id: 39,
    titulo: "Taller de Emociones",
    fecha: "2026-04-23",
    hora: "16:00",
    lugar: "Espacio Contención",
    imagen: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    descripcion: "Exploración emocional guiada con recursos visuales.",
    accesibilidad: { rampas: true, banios: true, lsa: false, braille: false, zonaTranquila: true }
  },

  {
    id: 40,
    titulo: "Cierre Comunitario",
    fecha: "2026-04-25",
    hora: "18:00",
    lugar: "Centro Cultural Central",
    imagen: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    descripcion: "Encuentro de cierre con participación comunitaria.",
    accesibilidad: { rampas: true, banios: true, lsa: true, braille: false, zonaTranquila: true }
  }
];


// ---------- Estado global compartido ----------
var usuarioActual = null;
var eventosInscripto = []; // array de IDs
var eventoSeleccionado = null;
var categoriaSeleccionada = ""; // filtro actual

// ---------- Utilidades ----------
function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  return f.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// mostrar/ocultar vistas (estas funciones serán llamadas por app.js)
function mostrarLogin() {
  usuarioActual = null;
  eventosInscripto = [];
  const loginView = document.getElementById("login-view");
  const appView = document.getElementById("app-view");
  if (loginView) { loginView.classList.remove("d-none"); loginView.classList.add("d-flex"); }
  if (appView) { appView.classList.add("d-none"); }
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
  if (loginView) { loginView.classList.add("d-none"); loginView.classList.remove("d-flex"); }
  if (appView) appView.classList.remove("d-none");

  const navUser = document.getElementById("nav-user");
  const navUserEmail = document.getElementById("nav-user-email");
  const topbarAvatar = document.getElementById("topbar-avatar");
  if (navUser) navUser.textContent = usuarioActual || "Usuario";
  if (navUserEmail) navUserEmail.textContent = usuarioActual || "usuario@email.com";
  if (topbarAvatar && usuarioActual) topbarAvatar.textContent = usuarioActual.charAt(0).toUpperCase();

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
