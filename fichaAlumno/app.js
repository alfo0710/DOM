const formRegistro = document.getElementById("formularioAlumno");
const botonCancelar = document.getElementById("botonCancelar");
const mensajeError = document.getElementById("mensajesError");
const mensajeExito = document.getElementById("mensajeExito");

const inputNombre = document.getElementById("campoNombre");
const inputApellido = document.getElementById("campoApellido");
const inputEmail = document.getElementById("campoEmail");
const inputTelefono = document.getElementById("campoTelefono");
const inputCelular = document.getElementById("campoCelular");
const inputDireccion = document.getElementById("campoDireccion");
const inputFecha = document.getElementById("campoFecha");
const inputClave = document.getElementById("campoClave");
const inputClave2 = document.getElementById("campoClave2");

formRegistro.addEventListener("submit", function (evento) {
  evento.preventDefault();
  validarFormulario();
});

botonCancelar.addEventListener("click", function () {
  formRegistro.reset();
  mensajeError.innerText = "";
  mensajeExito.innerText = "";
});

function validarFormulario() {
  let listaErrores = [];

  if (inputNombre.value.length < 3 || inputNombre.value.length > 30) {
    listaErrores.push("El nombre debe tener entre 3 y 30 caracteres.");
  }
  if (inputApellido.value.length < 3 || inputApellido.value.length > 30) {
    listaErrores.push("El apellido debe tener entre 3 y 30 caracteres.");
  }
  if (!inputEmail.value.includes("@")) {
    listaErrores.push("El email no es válido.");
  }
  if (!/^\d{8,15}$/.test(inputCelular.value)) {
    listaErrores.push("El celular debe tener entre 8 y 15 números.");
  }
  if (inputTelefono.value && !/^\d{6,15}$/.test(inputTelefono.value)) {
    listaErrores.push("El teléfono debe tener entre 6 y 15 números.");
  }
  if (inputDireccion.value.length < 5) {
    listaErrores.push("La dirección es demasiado corta.");
  }
  if (inputClave.value.length < 6) {
    listaErrores.push("La contraseña debe tener al menos 6 caracteres.");
  }
  if (inputClave.value !== inputClave2.value) {
    listaErrores.push("Las contraseñas no coinciden.");
  }

  if (listaErrores.length > 0) {
    mensajeError.innerText = listaErrores.join("\n");
    mensajeExito.innerText = "";
  } else {
    mensajeError.innerText = "";
    mensajeExito.innerText = `Registro exitoso:
Nombre: ${inputNombre.value}
Apellido: ${inputApellido.value}
Email: ${inputEmail.value}
Teléfono: ${inputTelefono.value || "No ingresado"}
Celular: ${inputCelular.value}
Dirección: ${inputDireccion.value}
Fecha nacimiento: ${inputFecha.value}`;
    formRegistro.reset();
  }
}
 
