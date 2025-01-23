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

// _______________________________________________


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

//  _____________________________________________________________________________

let nome = localStorage.getItem("nome");
let vemNome = document.getElementById("SeuNome").innerHTML = nome

let email = localStorage.getItem("Email");
let vemEmail = document.getElementById("SeuEmail").innerHTML = email


let senha = localStorage.getItem("senha");
let vemSenha = document.getElementById("SuaSenha").innerHTML = senha


let nascimento = localStorage.getItem("data de nascimento");
let vemNascimento = document.getElementById("SeuNasc").innerHTML = nascimento


let sexo = localStorage.getItem("Sexo");
let vemSexo = document.getElementById("SeuSexo").innerHTML = sexo


let cep = localStorage.getItem("CEP");
let vemCEP = document.getElementById("SeuCEP").innerHTML = cep

//  _____________________________________________________________________________



let array = ["Gabriel", "Louis", "Ana", "Julia", "Vandré", "Marta", "Kauan", "Leticia"]
let atribuir = [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9] = array


if (localStorage.getItem("Escolheu:") == ps3) {
  document.getElementById("ps1").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

else if (localStorage.getItem("Escolheu:") == ps2) {
  document.getElementById("ps2").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

else if (localStorage.getItem("Escolheu:") == ps8) {
  document.getElementById("ps3").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}


else if (localStorage.getItem("Escolheu:") == ps6) {
  document.getElementById("ps4").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}


else if (localStorage.getItem("Escolheu:") == ps4) {
  document.getElementById("ps5").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

else if (localStorage.getItem("Escolheu:") == ps7) {
  document.getElementById("ps6").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

else if (localStorage.getItem("Escolheu:") == ps1) {
  document.getElementById("ps7").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

else if (localStorage.getItem("Escolheu:") == ps5) {
  document.getElementById("ps8").style.display = "flex";
  document.getElementById("img_lupa").style.display = "none";
  document.getElementById("not").style.display = "none";
}

function del() {
  document.getElementById("ps1").style.display = "none";
  document.getElementById("ps2").style.display = "none";
  document.getElementById("ps3").style.display = "none";
  document.getElementById("ps4").style.display = "none";
  document.getElementById("ps5").style.display = "none";
  document.getElementById("ps6").style.display = "none";
  document.getElementById("ps7").style.display = "none";
  document.getElementById("ps8").style.display = "none";
  document.getElementById("img_lupa").style.display = "flex";
  document.getElementById("not").style.display = "flex";
  localStorage.removeItem("Escolheu:")
  localStorage.removeItem("atv")

}






