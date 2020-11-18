function calculaPreco() {
    var preco = parseFloat(document.getElementById('precoQuilo').value);
    var consumo = parseFloat(document.getElementById('consumo').value);

    var valor = preco * consumo / 1000;

    document.getElementById('valorFinal').innerHTML = "Valor a pagar R$: " + valor.toFixed(2);
}

var botao = document.getElementById('btnPreco');
botao.addEventListener('click', calculaPreco);