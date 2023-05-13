$(document).ready(function() {
  $('.form-iniciosesion').on('submit', function(event) {
    var rut = $('#rut').val();
    var nombre = $('#nombre').val();
    var direccion = $('#direccion').val();
    var correo = $('#correo').val();
    var password = $('#password').val();
    var region = $('#cboRegiones').val();

    if (rut.length < 9) {
      alert('El RUT debe tener al menos 9 dígitos');
      event.preventDefault();
    }

    if (nombre.length < 5) {
      alert('El nombre debe tener al menos 5 caracteres');
      event.preventDefault();
    }

    if (direccion.length < 10 || !/\d/.test(direccion)) {
      alert('La dirección debe tener al menos 10 caracteres y un número');
      event.preventDefault();
    }

    if (!correo.includes('@') || !correo.includes('.')) {
      alert('Ingrese un correo válido');
      event.preventDefault();
    }

    if (password.length < 10 || !/[A-Z]/.test(password)) {
      alert('La contraseña debe tener al menos 10 caracteres y una mayúscula');
      event.preventDefault();
    }

    if (region == '') {
      alert('Seleccione su región');
      event.preventDefault();
    }
  });
});












