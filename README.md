🌈 diverApp — Agenda Inclusiva de Eventos

Proyecto grupal para la materia Desarrollo de Aplicaciones Web.

📌 Descripción del proyecto

diverApp es una aplicación web pensada para gestionar y difundir eventos inclusivos.
La aplicación permite:

Iniciar sesión (login de prueba)

Ver un carrusel con próximos eventos

Buscar y filtrar eventos

Ver el detalle completo de cada evento

Inscribirse y des-inscribirse

Ver la sección “Mis eventos”

Crear nuevos eventos (modo demostración)

La interfaz es simple, accesible y cumple con los requisitos solicitados para el prototipo.

👩‍💻 Organización del equipo

Cada integrante se encarga de una funcionalidad específica de la app.
Esto permite que todas puedan explicar su parte y que nadie sobreescriba trabajo ajeno.

| Integrante     | Responsabilidad               | Archivos            |
| -------------- | ----------------------------- | ------------------- |
| **Sofi**       | Login / Logout                | `JS/login.js`       |
| **Erika**      | Carrusel de eventos           | `JS/carrusel.js`    |
| **Iara & Dal** | Filtros + listado de eventos  | `JS/filtros.js`     |
| **Flor**       | Detalle del evento            | `JS/detalle.js`     |
| **Vale**       | Inscripción y baja de eventos | `JS/inscripcion.js` |
| **Verónica**   | Vista “Mis eventos”           | `JS/mis-eventos.js` |


🧭 Forma de trabajo

El proyecto se trabaja directamente sobre la rama main.

Cada integrante edita solo el archivo que le corresponde.

Evitamos modificar archivos ajenos para no generar conflictos.

Antes de subir cualquier cambio, se prueban todas las funciones en local.

# 🧩 Pasos que debe seguir cada integrante

Estas instrucciones son iguales para todas:

---

1️⃣ Abrir la carpeta del proyecto
cd ruta/donde/esta/diverApp

---

2️⃣ Ver estado del repositorio
git status
git branch


Si hay cambios viejos que se quieran guardar:

git add .
git commit -m "backup versión anterior"


Si NO necesitan guardar nada:

git reset --hard

---

3️⃣ Asegurarse de estar en main
git checkout main
git pull origin main

Con esto todas quedan con **la misma versión funcional del proyecto**.

---

4️⃣ Trabajar solo en el archivo asignado

Ejemplos:
Sofi → JS/login.js

Erika → JS/carrusel.js

Iara & Dal → JS/filtros.js

Flor → JS/detalle.js

Vale → JS/inscripcion.js

Verónica → JS/mis-eventos.js

✅ No modificar HTML ni CSS salvo correcciones mínimas.
✅ No editar archivos de otras compañeras.

5️⃣ Probar antes de subir

Abrir index.html y revisar:

Que el login funcione.

Que la navegación sea correcta.

Que cada módulo responda bien.
---

## 6️⃣ Enviar los cambios a Santy (integradora)

Cuando la parte esté lista:

* NO hacer `git push origin main`
* Enviar por WhatsApp / Drive:

  * el archivo modificado, o
  * el fragmento de código cambiado

🔒 Reglas para evitar errores

No tocar archivos que no correspondan.

Probar siempre antes de subir cambios.

Mantener una sola versión activa del proyecto.

Avisar cualquier cambio importante al grupo.

# 📚 Tecnologías utilizadas

* HTML5 + CSS3
* JavaScript (modularizado por funcionalidad)
* Estructura semántica accesible
* Gestión mínima con Git
* GitHub como repositorio central

---

🎯 Objetivo del proyecto

Aprender a trabajar en equipo.

Dividir tareas reales de desarrollo web.

Unificar funcionalidades en una sola app.

Presentar un proyecto completo, ordenado y funcional.

✨ Equipo

Sofi · Erika · Iara · Dal · Flor · Vale · Verónica🎯 Objetivo del proyecto


