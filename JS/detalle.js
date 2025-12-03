function abrirDetalle(id) {
  const ev = eventos.find((e) => e.id === id);
  if (!ev) return;

  eventoSeleccionado = ev;

  detalleIcono.textContent = ev.icono || "🎫";
  detalleTitulo.textContent = ev.titulo;

  detalleTags.innerHTML = "";
  const catChip = document.createElement("span");
  catChip.className = "chip-small";
  catChip.textContent = ev.categoria.toUpperCase();
  detalleTags.appendChild(catChip);

  const modChip = document.createElement("span");
  modChip.className = "chip-small";
  modChip.textContent =
    ev.modalidad === "online" ? "Online" : "Presencial";
  detalleTags.appendChild(modChip);

  detalleFecha.textContent = `${formatearFecha(ev.fecha)} · ${ev.hora} hs`;
  detalleLugar.textContent = ev.lugar;
  detalleDescripcion.textContent = ev.descripcion;

  detalleAccesibilidad.innerHTML = "";
  (ev.accesibilidad || ["Accesible"]).forEach((txt) => {
    const li = document.createElement("li");
    li.textContent = txt;
    detalleAccesibilidad.appendChild(li);
  });

  const inscripto = eventosInscritos.includes(ev.id);
  const favorito = eventosFavoritos.includes(ev.id);

  btnToggleInscripcion.textContent = inscripto
    ? "Cancelar reserva"
    : "Reservar entrada";
  btnToggleFavorito.textContent = favorito
    ? "💔 Quitar de favoritos"
    : "❤️ Agregar a favoritos";

  detalleEstado.textContent = inscripto
    ? "Tu reserva está activa para este evento."
    : "Todavía no reservaste tu entrada.";

  cambiarVista("detalle");
}

window.abrirDetalle = abrirDetalle;
