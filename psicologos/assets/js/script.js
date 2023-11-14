function psc1() {
    let escolha = document.querySelector("#h3_1");
    let take = escolha.innerHTML
    let guarda = localStorage.setItem("Escolheu:", take);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}

function psc2() {
    let escolha2 = document.querySelector("#h3_2");
    let take2 = escolha2.innerHTML
    let guarda2 = localStorage.setItem("Escolheu:", take2);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}

function psc3() {
    let escolha3 = document.querySelector("#h3_3");
    let take3 = escolha3.innerHTML
    let guarda = localStorage.setItem("Escolheu:", take3);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}

function psc4() {
    let escolha4 = document.querySelector("#h3_4");
    let take4 = escolha4.innerHTML
    let guarda4 = localStorage.setItem("Escolheu:", take4);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"}

function psc5() { 
    let escolha5 = document.querySelector("#h3_5");
    let take5 = escolha5.innerHTML
    let guarda5 = localStorage.setItem("Escolheu:", take5);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}


function psc6() {
    let escolha6 = document.querySelector("#h3_6");
    let take6 = escolha6.innerHTML
    let guarda6 = localStorage.setItem("Escolheu:", take6);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}

function psc7() {
    let escolha7 = document.querySelector("#h3_7");
    let take7 = escolha7.innerHTML
    let guarda7 = localStorage.setItem("Escolheu:", take7);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}

function psc8() {
    let escolha8 = document.querySelector("#h3_8");
    let take8 = escolha8.innerHTML
    let guarda8 = localStorage.setItem("Escolheu:", take8);
    document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
    document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
    document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
     let symbol = document.getElementById("check");
     symbol.style.display = "block";
     let start = document.getElementById("space");
     start.style.display = "block"
}









const changeTheme = document.getElementById("tema")

function blackTheme(){
  document.body.classList.toggle("white")
}

function loadTheme(){
  const blackMode = localStorage.getItem("white") 

if(blackMode){
blackTheme()
  }
}

loadTheme();

changeTheme.addEventListener("change",function(){
  blackTheme()


localStorage.removeItem("white")


if(document.body.classList.contains("white")){
localStorage.setItem("white",1)
}
  

})
 