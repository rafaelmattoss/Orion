$("#menuv").text("Despesas Variáveis");
$("#menuv").removeClass("fechar");
$("#total").addClass('ocultar');
$("#calcular").hide(); 
$("#descricaof").hide();
$("#descricaov").hide();

if (menuVToggle) {
    $("#menuv").text("X");
    $("#menuv").addClass("fechar"); 
    $("#calcular").show(); 
    $("#total").removeClass('ocultar');
} else {
    $("#menuv").text("Despesas Variáveis");
    $("#menuv").removeClass("fechar");
    $("#total").addClass('ocultar');
    $("#calcular").hide(); 
    $("#descricaof").hide();
    $("#descricaov").hide();

}


let menuFToggle = false;
let menuVToggle = false;

$("#menuf").click(() => {
    $("#todasfixas").toggle();
    menuFToggle = !menuFToggle;

    $("#df").toggle();

    if (menuFToggle || (menuVToggle && !menuFToggle)) {
        $("#menuf").text("X");
        $("#menuf").addClass("fechar"); 
        $("#calcular").show(); 
        $("#total").removeClass('ocultar');
    } else {
        $("#menuf").text("Despesas Fixas");
        $("#menuf").removeClass("fechar");
        $("#total").addClass('ocultar');
        $("#calcular").hide(); 
        $("#descricaof").hide();
        $("#descricaov").hide();
    }

    if (menuFToggle) {
        $("#menuf").text("X");
        $("#menuf").addClass("fechar");
    } else{
        $("#menuf").text("Despesas Fixas");
        $("#menuf").removeClass("fechar");
    }

});




$("#menuv").click(() => {
    $("#todasvariaveis").toggle();
    menuVToggle = !menuVToggle;

    if (menuVToggle || (menuFToggle && !menuVToggle)) {
        $("#menuv").text("X");
        $("#menuv").addClass("fechar"); 
        $("#calcular").show(); 
        $("#total").removeClass('ocultar');
    } else {
        $("#menuv").text("Despesas Variáveis");
        $("#menuv").removeClass("fechar");
        $("#total").addClass('ocultar');
        $("#calcular").hide(); 
        $("#descricaof").hide();
        $("#descricaov").hide();
    }
});
    



$("#adcontasf").click(()=>{
    $("#descricaof").toggle();
})


$("#adcontasv").click(()=>{
    $("#descricaov").toggle();
});