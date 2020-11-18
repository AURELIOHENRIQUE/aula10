function promocao() {
    var produt = document.getElementById('produto').value;
    var preco = parseInt(document.getElementById('preco').value);
    var produtoPromoUnidade = preco / 2;
    var valorFinal = preco + preco + produtoPromoUnidade;

    document.getElementById('txtPromo').innerHTML = produt + " - Promoção: Leve 3 por R$: " + valorFinal.toFixed(2);
    document.getElementById('valorPromo').innerHTML = "O 3° produto custa apenas R$: " + produtoPromoUnidade.toFixed(2);
}

var botao = document.getElementById('btnPromo');
botao.addEventListener('click', promocao);