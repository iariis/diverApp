function manejarLogin() {
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  loginError.textContent = "";

  if (!email || !pass) {
    loginError.textContent = "Completá correo y contraseña.";
    return;
  }

  // login de prueba
  usuarioActual = email.split("@")[0] || "Usuario";
  usuarioEmailActual = email;

  mostrarApp();
  renderExplorarEventos();
  renderMisEventos();
  renderFavoritos();
}

function manejarLogout() {
  mostrarLogin();
}

window.manejarLogin = manejarLogin;
window.manejarLogout = manejarLogout;
