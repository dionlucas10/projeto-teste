function calcularFatorial() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado;

    if (numero < 0) {
        alert("Por favor, insira um número não negativo.");
        return;
    } else if (numero === 0) {
        resultado = 1;
    } else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        resultado = fatorial;
    }

    document.getElementById('resultado-fato').textContent = resultado;
}


