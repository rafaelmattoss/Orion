$(document).ready(function() {
    $("#addfixa").click(function() {
        var descricao = $("#descricao").val();
        var valor = $("#valor").val();

       
        if (descricao !== "" && valor !== "") {
            
            var novaDespesa = $("<div ></div>").addClass("df")
            var novolabel = $("<label></label>").addClass("lf")
            var novoInput = $("<input>").addClass("contasf");

            novolabel.text(descricao)
            novoInput.val(valor);
            novaDespesa.append(novolabel, novoInput)

            $("#todasfixas").append(novaDespesa);

            $("#descricao").val("");
            $("#valor").val("");
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    });


    
});
