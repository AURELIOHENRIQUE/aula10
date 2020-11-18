function calculaValor() {
    var valorM = parseFloat(document.getElementById('valorMin').value);
    var tempU = parseFloat(document.getElementById('tempUso').value);

    var valorF = Math.ceil(tempU/15) * valorM;

    document.getElementById('valorFinal').innerHTML = "Valor a pagar R$: " + valorF.toFixed(2);
}

var botao = document.getElementById('btnPreco');
botao.addEventListener('click', calculaValor);
