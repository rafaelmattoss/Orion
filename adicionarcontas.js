$(document).ready(function() {
    $("#addfixa").click(function() {
        // Obtendo os valores dos campos de descrição e valor
        var descricao = $("#descricao").val();
        var valor = $("#valor").val();

        // Verificando se ambos os campos estão preenchidos
        if (descricao !== "" && valor !== "") {
            // Criando uma nova div para a despesa
            var novaDespesa = $("<div></div>").addClass("despesa");
            var novoInput = $("<input>").addClass("contasf");
            novaDespesa.append("<p style='font-family: Arial, Helvetica, sans-serif;'>" + descricao + ": R$ " + valor + "</p>"); // Definindo o estilo de fonte

            // Adicionando a nova div à seção de despesas fixas
            $("#todasfixas").append(novaDespesa);

            // Limpar os campos de descrição e valor
            $("#descricao").val("");
            $("#valor").val("");
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    });
});
