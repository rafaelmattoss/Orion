


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


var resultadosDivisao = []; 

$("#calcular").click(function() {
    
    resultadosDivisao = [];

    var totalOriginal = parseFloat($('#total').text());

    resultadosDivisao.push(totalOriginal / 2);
    resultadosDivisao.push(totalOriginal / 3);
    resultadosDivisao.push(totalOriginal / 4);
});

$("#pessoas").click(function() {
    $('#total').text(resultadosDivisao[0].toFixed(2) + 'R$');
});

$("#pessoas1").click(function() {
   
    $('#total').text(resultadosDivisao[1].toFixed(2) + 'R$');
});

$("#pessoas2").click(function() {
    $('#total').text(resultadosDivisao[2].toFixed(2) + 'R$');
});








