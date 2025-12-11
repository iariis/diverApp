/* scripts/script.js
   Estado global y utilidades compartidas (variables globales con var para que otros scripts accedan).
*/

// ---------- DATOS DE EJEMPLO (incluye lo de Vero con imagenes) ----------
var eventos = [
  { id: 1, titulo: "Concierto inclusivo en el parque", categoria: "musica", fecha: "2025-12-10", hora: "19:30", lugar: "Parque Central", modalidad: "presencial", descripcion: "Concierto al aire libre con intérprete de lengua de señas.", imagen: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=800&h=600&fit=crop" },
  { id: 2, titulo: "Muestra de arte accesible", categoria: "arte", fecha: "2025-12-12", hora: "17:00", lugar: "Museo Municipal", modalidad: "presencial", descripcion: "Recorrido guiado con audiodescripción y folletería en braille.", imagen: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop" },
  { id: 3, titulo: "Torneo de deporte adaptado", categoria: "deporte", fecha: "2025-12-15", hora: "10:00", lugar: "Polideportivo Nº 3", modalidad: "presencial", descripcion: "Jornada deportiva con distintas disciplinas adaptadas.", imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop" },
  { id: 4, titulo: "Obra de teatro inclusiva", categoria: "teatro", fecha: "2025-12-20", hora: "20:00", lugar: "Teatro Independencia", modalidad: "presencial", descripcion: "Obra con subtítulos y bucle magnético.", imagen: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=800&h=600&fit=crop" },
  { id: 5, titulo: "Caminata Inclusiva al Río", categoria: "otros", fecha: "2025-12-18", hora: "10:00", lugar: "Costanera Sur", modalidad: "presencial", descripcion: "Caminata suave por senderos amplios y nivelados junto al río. Rampas y servicios accesibles.", imagen: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop" },
  { id: 6, titulo: "Picnic Comunitario Inclusivo", categoria: "otros", fecha: "2025-12-20", hora: "16:00", lugar: "Parque Centenario", modalidad: "presencial", descripcion: "Picnic con estaciones accesibles y menú para alergias.", imagen: "https://images.unsplash.com/photo-1501959915551-4e8a04a3e7a7?w=800&h=600&fit=crop" },
  { id: 7, titulo: "Taller de Arte Sensorial", categoria: "arte", fecha: "2025-12-22", hora: "15:00", lugar: "Centro Cultural Recoleta", modalidad: "presencial", descripcion: "Taller con materiales táctiles y audioguía.", imagen: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=800&h=600&fit=crop" },
  { id: 8, titulo: "Yoga Suave al Aire Libre", categoria: "deporte", fecha: "2025-12-26", hora: "08:30", lugar: "Plaza Alemania", modalidad: "presencial", descripcion: "Clase de yoga apta para todos los cuerpos y niveles.", imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop" },
  { id: 9, titulo: "Cine Inclusivo Bajo las Estrellas", categoria: "cine", fecha: "2025-12-28", hora: "20:30", lugar: "Parque Saavedra", modalidad: "presencial", descripcion: "Proyección con subtitulado descriptivo y audiodescripción.", imagen: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=800&h=600&fit=crop" }
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
