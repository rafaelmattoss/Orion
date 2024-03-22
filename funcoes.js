let menuFToggle = false;
let menuVToggle = false;

$("#menuf").click(() => {
    $("#todasfixas").toggle();
    menuFToggle = !menuFToggle;

    $("#df").toggle();

    if (menuFToggle || (menuVToggle && !menuFToggle)) {
        $("#calcular").show(); 
        $("#total").removeClass('ocultar');
    } else {
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
        $("#calcular").show(); 
        $("#total").removeClass('ocultar');
    } else {
        $("#total").addClass('ocultar');
        $("#calcular").hide(); 
        $("#descricaof").hide();
        $("#descricaov").hide();
    }

    if (menuVToggle) {
        $("#menuv").text("X");
        $("#menuv").addClass("fechar");
    } else{
        $("#menuv").text("Despesas Variáveis");
        $("#menuv").removeClass("fechar");
    }
});
    



$("#adcontasf").click(()=>{
    $("#descricaof").toggle();
})


$("#adcontasv").click(()=>{
    $("#descricaov").toggle();
});

$(".df").on("mousedown touchstart", function(event) {
    let startX = event.pageX || event.originalEvent.touches[0].pageX;
    let $element = $(this);
    
    $(document).on("mousemove touchmove", function(event) {
        let moveX = event.pageX || event.originalEvent.touches[0].pageX;
        let distance = moveX - startX;

        if (distance < -50) { // Se movido para a esquerda por mais de 50 pixels
            $element.addClass("deletar");
        } else {
            $element.removeClass("deletar");
        }
    }).on("mouseup touchend", function() {
        $(document).off("mousemove touchmove mouseup touchend");
        if ($element.hasClass("deletar")) {
            $element.remove();
        }
    });
});





