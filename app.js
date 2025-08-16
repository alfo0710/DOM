// Guardamos botón y contenedor de mensaje
var botonCalcular = document.getElementById("btn_calcular");
var mensajeResultado = document.getElementById("mensajeResultado");

// Escuchamos clic en el botón
botonCalcular.addEventListener("click", calcularTotal);

// Función principal para calcular
function calcularTotal() {
  var nombre = document.getElementById("nombre").value.trim();
  var cantidad = parseInt(document.getElementById("cantidadEntradas").value);
  var tipo = document.getElementById("tipoEntrada").value;
  var codigo = document.getElementById("codigoDescuento").value.trim();

  // Validar nombre
  if (nombre === "") {
    mostrarMensaje("❌ El nombre no puede estar vacío.", false);
    return;
  }

  // Validar cantidad
  if (isNaN(cantidad) || cantidad < 1) {
    mostrarMensaje("❌ La cantidad debe ser un número mayor a 0.", false);
    return;
  }

  // Precio según tipo
  var precio = 0;
  if (tipo === "general") {
    precio = 1000;
  } else if (tipo === "platino") {
    precio = 2000;
  } else if (tipo === "vip") {
    precio = 3000;
  }

  var total = precio * cantidad;

  // Verificar descuento
  if (codigo.toUpperCase() === "ROCK10") {
    total = total * 0.9;
  }

  // Mostrar mensaje final
  mostrarMensaje("✅ ¡Gracias " + nombre + "! Total a pagar: $" + total.toFixed(2), true);
}

// Función para mostrar mensaje con clases CSS
function mostrarMensaje(texto, esExito) {
  mensajeResultado.textContent = texto;

  // Limpiar clases anteriores
  mensajeResultado.className = "";

  // Agregar clase nueva
  if (esExito) {
    mensajeResultado.classList.add("exito");
  } else {
    mensajeResultado.classList.add("error");
  }
}
