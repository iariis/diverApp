function filtrarEventos(lista, texto, categoria) {
  const t = (texto || "").toLowerCase();
  const cat = categoria || "";

  return lista.filter((ev) => {
    const coincideTexto =
      !t ||
      ev.titulo.toLowerCase().includes(t) ||
      ev.descripcion.toLowerCase().includes(t) ||
      ev.lugar.toLowerCase().includes(t);

    const coincideCat = !cat || ev.categoria === cat;

    return coincideTexto && coincideCat;
  });
}

// global
window.filtrarEventos = filtrarEventos;
