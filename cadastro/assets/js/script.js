
function take() {
    
    let pegaNome0= document.querySelector("#nome");
    let resultadoNome = pegaNome0.value;
    let box = localStorage.setItem("nome", resultadoNome);

    // _________________________________________________________________

    let pegaData = document.querySelector("#date");
    let resultadoData = pegaData.value;
    let box2 = localStorage.setItem("data de nascimento", resultadoData);
    
    // _________________________________________________________________
    
    let pegaEmail = document.querySelector("#email");
    let resultadoEmail = pegaEmail.value;
    let box3 = localStorage.setItem("Email", resultadoEmail);

    // _________________________________________________________________

    let pegaSenha = document.querySelector("#senha");
    let resultadoSenha = pegaSenha.value;
    let box4 = localStorage.setItem("senha", resultadoSenha)
    
    // _________________________________________________________________
    
    let pegaCSenha = document.querySelector("#confSenha");
    let resultadoCSenha = pegaCSenha.value;
    let box5 = localStorage.setItem("senhaConfirma", resultadoCSenha)
    
    // _________________________________________________________________
    


    let pegaNome = document.querySelector("#nome");
    let resultado = pegaNome.value;
    if (resultadoSenha == resultadoCSenha) {
        let pegar = document.querySelector("#click");
        pegar.style.display = "block"

    }
    else{
        alert("Suas senhas são diferentes");
        let remove1 = localStorage.removeItem("senhaConfirma");
        let remove2 = localStorage.removeItem("senha");
    }
    
    window.location ="../login/login.html"
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
 


