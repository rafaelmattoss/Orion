
let menuFToggle = false;
let menuVToggle = false

$("#menuf").click(() => {
    $("#todasfixas").toggle();
    $("#calcular").toggle();
    menuFToggle = !menuFToggle;
    if (menuFToggle) {
        $("#menuf").text("X");
    } else {
        $("#menuf").text("Despesas Fixas");
    }
});

$("#menuv").click(() => {
    $("#todasvariaveis").toggle();
    $("#calcular").toggle();

    menuVToggle = !menuVToggle;
    if (menuVToggle) {
        $("#menuv").text("X");
    } else {
        $("#menuv").text(" Despesas Variaveis");
    }
});

$("#menuf, #menuv").click(() => {
    $("#calcular").toggle();
});










  
  
  


