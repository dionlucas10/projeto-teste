function calcularTabuada() {
    const tipoConta = document.getElementById("tipo-conta").value;
    const numero1 = parseFloat(document.getElementById("numero-tabuada").value);
    const numero2 = parseFloat(document.getElementById("numero-tabuada2").value);
    const resultadoElement = document.getElementById("resul-tabuada");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.textContent = "Por favor, insira números válidos.";
        return;
    }

    let resultado;
    switch (tipoConta) {
        case "adicao":
            resultado = numero1 + numero2;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            break;
        case "multiplicacao":
            resultado = numero1 * numero2;
            break;
        case "divisao":
            if (numero2 === 0) {
                resultadoElement.textContent = "Erro: Divisão por zero.";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            resultadoElement.textContent = "Tipo de conta inválido.";
            return;
    }

    resultadoElement.textContent = `Resultado: ${numero1} ${getOperador(tipoConta)} ${numero2} = ${resultado}`;
}

function getOperador(tipo) {
    switch (tipo) {
        case "adicao": return "+";
        case "subtracao": return "-";
        case "multiplicacao": return "x";
        case "divisao": return "/";
        default: return "?";
    }
}