


var botao = document.querySelector("#calcular");
botao.addEventListener("click", calculacontas);


function calculacontas() {
    var contasfixas = document.querySelectorAll(".contasf");
    var contasVariaveis= document.querySelectorAll(".contasv")
    var total = 0;

    contasfixas.forEach(function(input) {
        if (input.value.trim() !== "") {
            total += parseFloat(input.value);
        }
    });

    contasVariaveis.forEach(function(input) {
        if (input.value.trim() !== "") {
            total += parseFloat(input.value);
        }
    });

    var resultado = document.querySelector("#total");
    resultado.textContent = total.toFixed(2) + 'R$' ;
}


$("#pessoas").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 2;
    $('#total').text(novoTotal.toFixed(2)) + 'R$';
});

$("#pessoas1").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 3;
    $('#total').text(novoTotal.toFixed(2) + 'R$' );
});

$("#pessoas2").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 4;
    $('#total').text(novoTotal.toFixed(2)) + 'R$';
});





