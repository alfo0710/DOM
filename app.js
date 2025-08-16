
//guardar boton de calcular 
const calcular = document.getElementById("btn_calcular");
// const boton_ocultar = document.getElementById("btn_ocultar");

const resultado_suma = document.getElementById("resultado_suma");
const resultado_resta = document.getElementById("resultado_resta");
const resultado_multiplicacion = document.getElementById("resultado_mul");
const resultado_division = document.getElementById("resultado_div");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    // guardar los valores de los inputs y convertirlos a numero
  const numero1 = Number(document.getElementById("num1").value);
  const numero2 = Number(document.getElementById("num2").value);

  // Verificar si los inputs son válidossc

  if (isNaN(numero1) || isNaN(numero2))  {
    alert("Ingresa solo numeros");
    return;
  }

  resultado_suma.textContent = "Suma: " + suma(numero1, numero2);
  resultado_resta.textContent = "Resta: " + resta(numero1, numero2);
  resultado_multiplicacion.textContent = "Multiplicación: " + multiplicacion(numero1, numero2);
  resultado_division.textContent = "División: " + division(numero1, numero2);
});

// boton_ocultar.addEventListener("click", function() {
//   resultado.style.display = "none";
// });


// funciones para realizar las operaciones

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }

  //retorno la división con 2 decimales.(Recorto con  toFixed)
  return (a / b).toFixed(2);
}