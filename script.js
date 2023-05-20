function Ingresar() {
  // Obtenemos los valores ingresados por el usuario
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var contrasena = document.getElementById("contrasena").value;

  // Verificamos si el nombre de usuario y la contraseña son idénticos
  if (nombreUsuario === contrasena) {
    // Si son idénticos, redirigimos al usuario a la página principal de productos
    window.location.href = "privada.html";
  } else {
    // Si no son idénticos, mostramos un mensaje de error y limpiamos el formulario
    alert("Nombre de usuario y contraseña no coinciden. Por favor, inténtalo nuevamente.");
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("contrasena").value = "";
  }
}
//redireccional del modal
$(document).ready(function() {
  $("#shippingForm").submit(function(event) {
    event.preventDefault();
    showSuccessModal();
    setTimeout(function() {
      window.location.href = "privada.html"; 
    }, 5000);
  });

  function showSuccessModal() {
    $("#successModal").modal("show");
  }
});

