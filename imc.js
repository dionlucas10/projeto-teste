function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = peso / (altura * altura);
    document.querySelector(".resultado-imc").textContent = imc.toFixed(2);

    const tabela = document.getElementById("tabela");
    if (imc < 18.5) {
        tabela.textContent = "Abaixo do peso";
    } else if (imc < 25) {
        tabela.textContent = "Peso normal";
    } else if (imc < 30) {
        tabela.textContent = "Sobrepeso";
    } else {
        tabela.textContent = "Obesidade";
    }
}