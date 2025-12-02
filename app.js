// DATOS FIJOS DE USUARIO
const userEmail = "admin@diverapp.com";
const userPassword = "123456";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(email === userEmail && pass === userPassword){

        error.style.display = "none";
        success.style.display = "block";

        setTimeout(()=>{
            alert("Inicio de sesión correcto ✅");
            // Redirigir a home
            // window.location.href = "home.html";
        },1000);

    } else {

        success.style.display = "none";
        error.style.display = "block";
    }

});
