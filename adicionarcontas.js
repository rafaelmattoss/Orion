$(document).ready(()=>{
   $("#addfixa").click(()=>{

    var descricao = $("#descricao").val();
    var valor = $("#valor").val();

   
    if (descricao !== "" && valor !== "") {
        
        var novaDespesa = $("<div></div>").addClass("df");
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

   })

   $("#addvariavel").click(()=>{
    
    var despesav = $("#descricaovv").val();
    var valorv = $("#valorv").val();

    if(despesav !== "" &&  valorv !==""){

    var novaDespesav=   $("<div></div>").addClass("dv");
    var novolabelv = $("<label></label>").addClass("lv"); 
    var novoinputv = $("<input>").addClass("contasv")

    novolabelv.text(despesav)
    novoinputv.val(valorv)

    novaDespesav.append(novolabelv, novoinputv);

    $("#todasvariaveis").append(novaDespesav)

    $("#descricaovv").val("");
    $("#valorv").val("");

    } else{
        alert(" os dois campos precisam ser preenchidos")
    }


   })
       
})
    