var botao = document.querySelector("#calcular")
botao.addEventListener("click", calculacontas)


function calculacontas(){

    var contasfixas = document.querySelectorAll(".contasf")

    var total = 0;

    contasfixas.forEach(function(input) {

        if (input.value.trim() !== "") {
            
            total += parseFloat(input.value);
        }
       
        
    });

    var resultado = document.querySelector("#total")
    resultado.textContent = total
}



