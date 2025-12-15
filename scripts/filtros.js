/* scripts/filtros.js */
function filtrarEventos(lista, texto, categoria) {
  const q = (texto || "").toLowerCase().trim();

  return lista.filter((ev) => {
    const coincideTexto =
      ev.titulo.toLowerCase().includes(q) ||
      (ev.descripcion && ev.descripcion.toLowerCase().includes(q)) ||
      (ev.lugar && ev.lugar.toLowerCase().includes(q));

    const coincideCategoria = !categoria || categoria === "" || ev.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });
}