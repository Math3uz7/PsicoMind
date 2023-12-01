
// if (localStorage.getItem("senha") == localStorage.getItem("senhaConfirma") && ) {

//   let perfil = document.querySelector(".perfil")
//   let troca1 =perfil.style.display = "block"
//   let button = document.getElementById("join")
//   let troca2= button.style.display = "none"
  

// }

let email = document.querySelector("#meuEmail")
let valoremail = email.value

let senha = document.querySelector("#minhaSenha")
let valorsenha = senha.value

let getEmail = localStorage.getItem("Email")
let getSenha = localStorage.getItem("senha")

if (valoremail == getEmail && valorsenha == getSenha) {

  let perfil = document.querySelector(".perfil")
  let troca1 =perfil.style.display = "block"
  let button = document.getElementById("join")
  let troca2= button.style.display = "none"
  window.location.href ="../index.html"
  

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
 