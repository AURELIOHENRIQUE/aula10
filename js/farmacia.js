function promocao() {
    var medicamento = document.getElementById('medicamento').value;
    var preco = parseInt(document.getElementById('preco').value);
    var valorFinal = preco * 2;

    document.getElementById('txtPromo').innerHTML = "Promoção de " + medicamento;
    document.getElementById('valorPromo').innerHTML = "Leve 2 por apenas R$: " + valorFinal.toFixed(2);
}

var botao = document.getElementById('btnPromo');
botao.addEventListener('click', promocao);