function manejarLogin() {
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  loginError.textContent = "";

  if (!email || !pass) {
    loginError.textContent = "Por favor completá correo y contraseña.";
    return;
  }

  // Login de prueba: acepta cualquier usuario
  usuarioActual = email;
  mostrarApp();
}

function manejarLogout() {
  mostrarLogin();
}
