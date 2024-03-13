var resultadosDivisao = [];
var salarioOriginal;

$("#calcular").click(function() {
    var salario = parseFloat($("#salario").val()); 
    salarioOriginal = salario; 
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
});

$("#total").click(() => {
    var salario = parseFloat($("#salario").val());
    var totalAtual = parseFloat($('#total').text());
    var novoSalario = salario - totalAtual;
    $("#salario").val(novoSalario.toFixed(2));

    $("#total").addClass("pulsate");
    
    // Remove a classe pulsate após 1 segundo
    setTimeout(() => {
        $("#total").removeClass("pulsate");
    }, 1000);
});


function divisao(totalOriginal) {
    resultadosDivisao = [];
    resultadosDivisao.push(totalOriginal / 2);
    resultadosDivisao.push(totalOriginal / 3);
    resultadosDivisao.push(totalOriginal / 4);
}

$("#pessoas").click(function() {
    var valorDivisao = resultadosDivisao[0];
    var novoSalario = salarioOriginal - valorDivisao; 
    $('#total').text(valorDivisao.toFixed(2) + 'R$');
    $("#salario").val(novoSalario.toFixed(2)); 
});

$("#pessoas1").click(function() {
    var valorDivisao = resultadosDivisao[1];
    var novoSalario = salarioOriginal - valorDivisao; 
    $('#total').text(valorDivisao.toFixed(2) + 'R$');
    $("#salario").val(novoSalario.toFixed(2)); 
});

$("#pessoas2").click(function() {
    var valorDivisao = resultadosDivisao[2];
    var novoSalario = salarioOriginal - valorDivisao; 
    $('#total').text(valorDivisao.toFixed(2) + 'R$');
    $("#salario").val(novoSalario.toFixed(2)); 
});
