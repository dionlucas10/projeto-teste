function calcularPerimetroCircular(){
    let raio = parseFloat(document.getElementById("raio-num").value);
    let perimetro = 2 * Math.PI * raio;
    let mensagem = `O perímetro do círculo é: ${perimetro.toFixed(2)} cm`;
    console.log(perimetro);
    document.getElementById('resul-circular').innerHTML = mensagem;

    let area = Math.PI * Math.pow(raio, 2);
    let mensagemArea = `A área do círculo é: ${area.toFixed(2)} cm²`;
    document.getElementById('resul-raio').innerHTML = mensagemArea;
}