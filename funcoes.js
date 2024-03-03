
var dvariaveis = document.querySelector(".dvariaveis")
var cvariaveis = document.querySelector("#dvariaveis")
var dfixas = document.querySelector(".dfixas");
var divFixas = document.querySelector("#dfixas");
var adContas = document.querySelector("#adicionar-conta");
var botaoAdicionar = document.querySelector(".adcontas")



dfixas.addEventListener("click", function() {
  if (divFixas.style.display === "block") {
    divFixas.style.display = "none";
  } else {
    divFixas.style.display = "block";
  }
});


dvariaveis.addEventListener("click", function() {
  
    if (cvariaveis.style.display === "block") {
      cvariaveis.style.display = "none";
    } else {
      cvariaveis.style.display = "block";
    } 
  });
  

botaoAdicionar.addEventListener("click", function(){
 if(adContas.style.display === "none"){
  adContas.style.display = "block";
 }else{
  adContas.style.display = "none";
 }

})




  
  
  


