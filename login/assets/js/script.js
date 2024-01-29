function entrar() {
  let binario;

    let email = document.querySelector("#meuEmail")
    let valoremail = email.value

    let senha = document.querySelector("#minhaSenha")
    let valorsenha = senha.value

    let getEmail = localStorage.getItem("Email")
    let getSenha = localStorage.getItem("senha")
    
    
    
    if (valoremail == getEmail && valorsenha == getSenha  ) {
    
      binario = 1
      localStorage.setItem("bi",binario)

     window.location.href ="../index.html"
    }
   

   else {
        alert("Email ou senha estão errados")
    }

    


let valida = localStorage.getItem("bi")


 if (valida == 1) {
      
  let perfil2 =  document.querySelector(".perfil").style.display = "block"
  let local2 = document.getElementById("join").style.display = "none"
  
  localStorage.setItem("entre" , perfil2)
  localStorage.setItem("perfil", local2)


}
else if(valida == ""){
  
  let perfil2 =  document.querySelector(".perfil").style.display = "none"    
  let local2 = document.getElementById("join").style.display = "block"


  localStorage.setItem("entre" , perfil2)
  localStorage.setItem("perfil", local2)


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
 