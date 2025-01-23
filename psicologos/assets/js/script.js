function psc1() {
  let escolha = document.querySelector("#h3_1");
  let take = escolha.innerHTML
  localStorage.setItem("Escolheu:", take);
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
  localStorage.setItem("Escolheu:", take2);
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
  localStorage.setItem("Escolheu:", take3);
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
  localStorage.setItem("Escolheu:", take4);
  document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
  document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
  document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
  let symbol = document.getElementById("check");
  symbol.style.display = "block";
  let start = document.getElementById("space");
  start.style.display = "block"

}

function psc5() {
  let escolha5 = document.querySelector("#h3_5");
  let take5 = escolha5.innerHTML
  localStorage.setItem("Escolheu:", take5);
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
  localStorage.setItem("Escolheu:", take6);
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
  localStorage.setItem("Escolheu:", take7);
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
  localStorage.setItem("Escolheu:", take8);
  document.body.querySelector("#space2").innerHTML = localStorage.getItem("Escolheu:");
  document.body.querySelector("#space3").innerHTML = new Date().toLocaleTimeString();
  document.body.querySelector("#space4").innerHTML = new Date().toLocaleDateString();
  let symbol = document.getElementById("check");
  symbol.style.display = "block";
  let start = document.getElementById("space");
  start.style.display = "block"

}









const changeTheme = document.getElementById("tema")

function blackTheme() {
  document.body.classList.toggle("white")
}

function loadTheme() {
  const blackMode = localStorage.getItem("white")

  if (blackMode) {
    blackTheme()
  }
}

loadTheme();

changeTheme.addEventListener("change", function () {
  blackTheme()


  localStorage.removeItem("white")


  if (document.body.classList.contains("white")) {
    localStorage.setItem("white", 1)
  }


})


// __________________________________________________________

let valida = localStorage.getItem("bi")


if (valida == 1) {

  let perfil2 = document.querySelector(".perfil").style.display = "block"
  let local2 = document.getElementById("join").style.display = "none"

  localStorage.setItem("entre", perfil2)
  localStorage.setItem("perfil", local2)


}
else if (valida == "") {

  let perfil2 = document.querySelector(".perfil").style.display = "none"
  let local2 = document.getElementById("join").style.display = "block"


  localStorage.setItem("entre", perfil2)
  localStorage.setItem("perfil", local2)


}

