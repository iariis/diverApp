function abrirDetalle(id) {
  
  if (!Array.isArray(eventos)) {

    console.warn("Error: 'eventos' no existe o no es un array.");
    return;

  }


  const buscId = String(id).trim();

  if (isNaN(buscId)) {

    console.warn("Error: id inválido:", id);
    return;

  }

 
  let ev = null;

  for (let i = 0; i < eventos.length; i++) {
   
    if ((String(eventos[i].id)) === buscId) {

      ev = eventos[i];
      break;
    }

  }


  if (ev === null) {

    return;

  }


  eventoSeleccionado = ev;
  detalleTitulo.textContent = ev.titulo;
  detalleFecha.textContent = ev.fecha + " · " + ev.hora;
  detalleLugar.textContent = ev.lugar;


  if (ev.modalidad === "online") {

    detalleModalidad.textContent = "Online";

  } else {

    detalleModalidad.textContent = "Presencial";

  }

  detalleDescripcion.textContent = ev.descripcion;


  detalleTags.innerHTML = `
  <span class="badge bg-primary text-capitalize">${ev.categoria}</span>
  <span class="badge bg-secondary">${ev.modalidad}</span>
  `;


  let inscripto = false;
  const idEvento = String(ev.id);

  if (Array.isArray(eventosInscripto)) {

    for (let i = 0; i < eventosInscripto.length; i++) {

      if (String(eventosInscripto[i]) === idEvento) {

        inscripto = true;
        break;

      }

    }

  }

  if (inscripto) {

  detalleEstado.textContent = "Ya estás anotado a este evento.";
  btnToggleInscripcion.textContent = "Cancelar reserva";

  }else {

  detalleEstado.textContent = "Todavía no estás anotado a este evento.";
  btnToggleInscripcion.textContent = "Reservar entrada";

  }

 
  cambiarVista("detalle");
  
}
