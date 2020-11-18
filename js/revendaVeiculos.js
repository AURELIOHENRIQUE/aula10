function precoCarro() {
    var veiculo = document.getElementById("veiculo").value;
    var preco = parseFloat(document.getElementById("preco").value);

    var entrada = preco / 2;
    var parcelas = entrada / 12;

    document.getElementById("carro").innerHTML = "Promoção: " + veiculo;
    document.getElementById("entrada").innerHTML = "Entrada de R$: " + entrada.toFixed(2);
    document.getElementById("parcelas").innerHTML = "+ 12x de R$: " + parcelas.toFixed(2);
}

var botao = document.getElementById('btnPromo');
botao.addEventListener('click', precoCarro);