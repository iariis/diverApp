document.addEventListener("DOMContentLoaded", () => {
  const listaInicio = document.getElementById("listaInicio");
  if (!listaInicio || typeof eventos === "undefined") return;

  listaInicio.innerHTML = "";

  eventos.forEach((evento, index) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <img src="${evento.imagen}" class="d-block w-100" style="height:350px; object-fit:cover;">
      <div class="carousel-caption bg-dark bg-opacity-50 rounded">
        <h5>${evento.titulo}</h5>
        <p>${evento.fecha} · ${evento.lugar}</p>
      </div>
    `;

    listaInicio.appendChild(item);
  });
});