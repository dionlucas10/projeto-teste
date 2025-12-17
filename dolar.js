function converterDolar() {
    let valorReal = parseFloat(document.getElementById("valorReal").value);
    let valorDolar = valorReal * 5.50; 
    let mensagem = `O valor em dólar é $ ${valorDolar.toFixed(2)}`;
    console.log(valorDolar);

    document.getElementById('resul-dolar').innerHTML = mensagem;
}