(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

function controltag(e) {
  tecla = (document.all) ? e.keyCode : e.which;

  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }

  // Patron de entrada, en este caso solo acepta letras
  patron = /[A-Za-z]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

function habilitar1() {
  if (document.getElementById("def1-text").length != 0) {

    document.getElementById("def2-text").disabled = false; // habilitar
    document.getElementById("def3-text").disabled = true; // deshabilitar

  }
}

function habilitar2() {
  if (document.getElementById("def2-text").length != 0 && document.getElementById("def1-text").length != 0) {

    document.getElementById("def3-text").disabled = false; // habilitar
  }
}
