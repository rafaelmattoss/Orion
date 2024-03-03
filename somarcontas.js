var botaoSomar = document.querySelector("#somar")
soma = 0;
botaoSomar.addEventListener("click", somarDespesasF);



function somarDespesasF() {
    var contasF = document.querySelectorAll(".contasf");
    var soma = 0;
  
    for (var i = 0; i < contasF.length; i++) {
      var valor = parseFloat(contasF[i].value);
      if (!isNaN(valor)) {
        soma += valor;
      } 
    } 

    console.log("Valor da soma:", soma);

  
   var totalSoma = document.querySelector("#itotall");
   totalSoma.textContent = soma;
  }
  