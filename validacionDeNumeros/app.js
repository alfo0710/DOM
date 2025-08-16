const comprobar = document.getElementById("btn_comprobar");
const resultado = document.getElementById("resultado");

comprobar.addEventListener("click", function () {
  
  const valor1 = document.getElementById("num1").value;
  const valor2 = document.getElementById("num2").value;

  // 1) Verificar si son números
   if (isNaN(valor1) || isNaN(valor2) || valor1 === "" || valor2 === "") {
    resultado.textContent = "Ingresa solo números.";
    return;
  }

  // 2) Verificar si tienen como máximo 8 caracteres
  if (valor1.length > 8 || valor2.length > 8) {
    resultado.textContent =
      "Los números deben tener como máximo 8 caracteres.";
    return;
  }

  // 3) Convertir a número y verificar si son iguales o no
  const numero1 = Number(valor1);
  const numero2 = Number(valor2);

  if (numero1 === numero2) {
    resultado.textContent = "Los números son IGUALES.";
  } else {
    resultado.textContent = "Los números son DIFERENTES.";
  }
});


