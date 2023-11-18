function entrar() {

    let email = document.querySelector("#meuEmail")
    let valoremail = email.value

    let senha = document.querySelector("#minhaSenha")
    let valorsenha = senha.value

    let getEmail = localStorage.getItem("Email")
    let getSenha = localStorage.getItem("senha")

    if (valoremail == getEmail && valorsenha == getSenha) {
        
        window.location.href ="../index.html"
    }

   else {
        alert("Email ou senha estão errados")
    }


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
 