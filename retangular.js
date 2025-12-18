function calcularAreaRetangulo() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = base * altura;
    let mensagem = `${area.toFixed(2)} cm²`;

    document.getElementById("resul-retangular").textContent = mensagem;

    const perimetro = 2 * (base + altura);
    let mensagemPerimetro = `${perimetro.toFixed(2)} cm`;
    document.getElementById("Perimetro").textContent = mensagemPerimetro;
}