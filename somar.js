
var resultadosDivisao = [];


$("#calcular").click(function() {
    var salario = $( "#salario" ).val(); 
    var contasfixas = document.querySelectorAll(".contasf");
    var contasVariaveis = document.querySelectorAll(".contasv");
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

    
    $('#total').text(total.toFixed(2) + "R$");

    divisao(total);

    var totalreal = (salario - total)

    $("#salario").val(totalreal);

});


function divisao(totalOriginal) {
    resultadosDivisao = [];

    resultadosDivisao.push(totalOriginal / 2);
    resultadosDivisao.push(totalOriginal / 3);
    resultadosDivisao.push(totalOriginal / 4);
}


$("#pessoas").click(function() {
    $('#total').text(resultadosDivisao[0].toFixed(2) + 'R$'); 
});

$("#pessoas1").click(function() {
    $('#total').text(resultadosDivisao[1].toFixed(2) + 'R$');
});

$("#pessoas2").click(function() {
    $('#total').text(resultadosDivisao[2].toFixed(2) + 'R$');
});
