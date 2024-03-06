

var botao = document.querySelector("#calcular");
botao.addEventListener("click", calculacontas);


function calculacontas() {
    var contasfixas = document.querySelectorAll(".contasf");
    var total = 0;

    contasfixas.forEach(function(input) {
        if (input.value.trim() !== "") {
            total += parseFloat(input.value);
        }
    });

    var resultado = document.querySelector("#total");
    resultado.textContent = total;
}

$("#pessoa").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 1;
    $('#total').text(novoTotal);
});

$("#pessoas").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 2;
    $('#total').text(novoTotal);
});

$("#pessoas1").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 3;
    $('#total').text(novoTotal);
});

$("#pessoas2").click(function() {
    var total = parseFloat($('#total').text());
    var novoTotal = total / 2;
    $('#total').text(novoTotal);
});





