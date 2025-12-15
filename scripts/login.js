/* scripts/login.js - Lógica de login con clases, adaptada para la SPA */

(function () {
  "use strict";

  // --- Clases para la lógica de autenticación ---

  class Usuario {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }

  // Clase Login para DiverApp (Fusionada y Corregida)
  class LoginDiverApp {
    constructor() {
      // IDs correctos según tu estructura HTML y otros scripts
      this.inputEmail = document.getElementById("email-login");
      this.inputPassword = document.getElementById("password-login");
      this.btnLogin = document.getElementById("btn-login");
      this.mensaje = document.getElementById("login-error");
      this.btnLogout = document.getElementById("btn-logout");

      // Usuario de prueba
      this.usuarioRegistrado = new Usuario("diver@app.com", "1234");

      this.attachListeners();
    }

    iniciarSesion() {
      if (!this.inputEmail || !this.inputPassword) {
        alert("Elementos de login no encontrados en el DOM. Revisa los IDs en index.html.");
        return;
      }

      const email = this.inputEmail.value.trim();
      const password = this.inputPassword.value.trim();

      if (!email || !password) {
        this.mostrarMensaje("Completá todos los campos obligatorios", "danger");
        return;
      }

      if (this.validarUsuario(email, password)) {
        this.guardarSesion(email);
        this.mostrarMensaje("Login correcto ✔", "success");

        // En lugar de recargar la página, llamamos a la función que muestra la app
        setTimeout(() => {
          this.safeCall("mostrarApp");
        }, 500); // Un pequeño delay para que se vea el mensaje de éxito
      } else {
        this.mostrarMensaje("Email o contraseña incorrectos", "danger");
      }
    }

    cerrarSesion() {
      localStorage.removeItem("usuarioDiverApp");
      window.usuarioActual = null;
      this.safeCall("mostrarLogin");
    }

    validarUsuario(email, password) {
      return (
        email === this.usuarioRegistrado.email &&
        password === this.usuarioRegistrado.password
      );
    }

    guardarSesion(email) {
      localStorage.setItem("usuarioDiverApp", email);
      window.usuarioActual = email; // Mantenemos la variable global por compatibilidad
    }

    mostrarMensaje(texto, tipo) {
      if (this.mensaje) {
        this.mensaje.textContent = texto;
        // Usamos las clases de Bootstrap para el color del texto
        this.mensaje.className = `mensaje-error text-${tipo}`;
      }
    }

    safeCall(fnName, ...args) {
      const fn = window[fnName];
      if (typeof fn === "function") {
        try {
          return fn(...args);
        } catch (e) {
          console.error(`Error al ejecutar ${fnName}():`, e);
        }
      } else {
        console.warn(`${fnName} no está definida en window.`);
      }
    }

    attachListeners() {
      if (this.btnLogin) {
        this.btnLogin.addEventListener("click", (e) => {
          e.preventDefault(); // Evita que el formulario recargue la página
          this.iniciarSesion();
        });
      }

      if (this.btnLogout) {
        this.btnLogout.addEventListener("click", () => this.cerrarSesion());
      }
    }
  }

  // Esperar a que el DOM esté listo para instanciar la clase
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new LoginDiverApp());
  } else {
    new LoginDiverApp();
  }
})();
