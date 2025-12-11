/* scripts/login.js - versión robusta que no depende de variables globales ni del orden de carga */

(function () {
  "use strict";

  function getEl(id) {
    return document.getElementById(id);
  }

  function safeCall(fnName, ...args) {
    const fn = window[fnName];
    if (typeof fn === "function") {
      try {
        return fn(...args);
      } catch (e) {
        console.error(`Error al ejecutar ${fnName}():`, e);
        alert(`Error interno al ejecutar ${fnName}(). Revisa la consola.`);
      }
    } else {
      console.warn(`${fnName} no está definida en window.`);
    }
  }

  function manejarLogin() {
    const emailInput = getEl("email-login");
    const passInput = getEl("password-login");
    const loginError = getEl("login-error");

    if (!emailInput || !passInput) {
      alert("Elementos de login no encontrados en el DOM. Revisa index.html.");
      return;
    }

    const email = emailInput.value.trim();
    const pass = passInput.value.trim();

    if (!email || !pass) {
      if (loginError) loginError.textContent = "Por favor completá correo y contraseña.";
      else alert("Por favor completá correo y contraseña.");
      return;
    }

    // Login simulado: almacenamos el usuario en la variable global si existe, si no la creamos
    try {
      window.usuarioActual = email;
    } catch (e) {
      console.warn("No se pudo setear usuarioActual en window:", e);
      window.usuarioActual = email; // intento de asignar de todos modos
    }

    // Llamar a mostrarApp si está definida
    if (typeof window.mostrarApp === "function" || typeof window.mostrarApp === "undefined") {
      safeCall("mostrarApp");
    } else {
      alert("La aplicación no puede iniciarse: falta la función mostrarApp().");
    }
  }

  function manejarLogout() {
    // Limpiar usuario y llamar mostrarLogin si existe
    try {
      window.usuarioActual = null;
    } catch (e) {
      console.warn("No se pudo limpiar usuarioActual:", e);
    }
    safeCall("mostrarLogin");
  }

  function attachListeners() {
    const btnLogin = getEl("btn-login");
    const btnLogout = getEl("btn-logout");

    if (btnLogin) {
      btnLogin.removeEventListener("click", manejarLogin);
      btnLogin.addEventListener("click", manejarLogin);
      console.log("login.js: listener btn-login conectado");
    } else {
      console.warn("login.js: btn-login no encontrado");
    }

    if (btnLogout) {
      btnLogout.removeEventListener("click", manejarLogout);
      btnLogout.addEventListener("click", manejarLogout);
      console.log("login.js: listener btn-logout conectado");
    } else {
      console.warn("login.js: btn-logout no encontrado (no es crítico)");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachListeners);
  } else {
    attachListeners();
  }

  // Export por si quieres llamar desde consola
  window.manejarLogin = manejarLogin;
  window.manejarLogout = manejarLogout;
})();
