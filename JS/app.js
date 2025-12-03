
function manejarLogin() {
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  loginError.textContent = "";

  if (!email || !pass) {
    loginError.textContent = "Por favor completá correo y contraseña.";
    return;
  }

  // Login SIMULADO
  usuarioActual = email;
  mostrarApp();
}

function manejarLogout() {
  mostrarLogin();
}

// Eventos de login / logout
btnLogin.addEventListener("click", manejarLogin);
btnLogout.addEventListener("click", manejarLogout);

// Navegación por las vistas del header
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.getAttribute("data-view");
    if (views[view]) {
      cambiarVista(view);
    }
  });
});

// Estado inicial de la aplicación
mostrarLogin();
