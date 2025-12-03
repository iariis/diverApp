/**
 * Filtra una lista de eventos según los criterios de búsqueda.
 * @param {Array} eventos - El array de eventos a filtrar.
 * @param {string} texto - El texto para buscar en título y descripción.
 * @param {string} cat - La categoría a filtrar.
 * @param {string} mod - La modalidad a filtrar.
 * @returns {Array} - Un nuevo array con los eventos filtrados.
 */
function filtrarEventos(eventos, texto, cat, mod) {
  const textoLower = texto.toLowerCase();
  return eventos.filter((ev) => {
    const coincideTexto =
      ev.titulo.toLowerCase().includes(textoLower) || ev.descripcion.toLowerCase().includes(textoLower);
    const coincideCat = !cat || ev.categoria === cat;
    const coincideMod = !mod || ev.modalidad === mod;
    return coincideTexto && coincideCat && coincideMod;
  });
}