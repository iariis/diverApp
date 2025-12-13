// ===== CARRUSEL INICIO =====

// contenedor del carrusel
const listaInicio = document.getElementById("listaInicio");

// datos de ejemplo (podés reemplazarlos por los reales)
const eventosInicio = [
  {
    titulo: "Festival Inclusivo",
    descripcion: "Un espacio para compartir sin barreras",
    imagen: "https://picsum.photos/800/400?random=1"
  },
  {
    titulo: "Charla de Accesibilidad",
    descripcion: "Tecnología para todas las personas",
    imagen: "https://picsum.photos/800/400?random=2"
  },
  {
    titulo: "Encuentro Cultural",
    descripcion: "Arte, música y diversidad",
    imagen: "https://picsum.photos/800/400?random=3"
  }
];

// render del carrusel
function renderInicio() {
  listaInicio.innerHTML = "";

  eventosInicio.forEach((evento, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;

    item.innerHTML = `
      <img src="${evento.imagen}" class="d-block w-100" alt="${evento.titulo}">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
        <h5>${evento.titulo}</h5>
        <p>${evento.descripcion}</p>
      </div>
    `;

    listaInicio.appendChild(item);
  });
}

// ejecutar al cargar
renderInicio();
