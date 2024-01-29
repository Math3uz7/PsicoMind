
function take() {
    
    let pegaNome0= document.querySelector("#nome");
    let resultadoNome = pegaNome0.value;
    localStorage.setItem("nome", resultadoNome);

    // _________________________________________________________________

    let pegaData = document.querySelector("#date");
    let resultadoData = pegaData.value;
    localStorage.setItem("data de nascimento", resultadoData);
    
    // _________________________________________________________________
    
    let pegaEmail = document.querySelector("#email");
    let resultadoEmail = pegaEmail.value;
    localStorage.setItem("Email", resultadoEmail);

    // _________________________________________________________________

    let pegaSenha = document.querySelector("#senha");
    let resultadoSenha = pegaSenha.value;
    localStorage.setItem("senha", resultadoSenha)
    
    // _________________________________________________________________
    
    let pegaCSenha = document.querySelector("#confSenha");
    let resultadoCSenha = pegaCSenha.value;
    localStorage.setItem("senhaConfirma", resultadoCSenha)
    
    // _________________________________________________________________
    
    let pegaCEP = document.querySelector("#CEP");
    let resultadoCEP = pegaCEP.value;
    localStorage.setItem("CEP", resultadoCEP)

    // __________________________________________________________________

    let pegarua = document.querySelector("#rua");
    let resultadorua = pegarua.value;
    localStorage.setItem("Rua", resultadorua)

    // __________________________________________________________________

    let pegacidade = document.querySelector("#cidade");
    let resultadocidade = pegacidade.value;
    localStorage.setItem("Cidade", resultadocidade)

    // __________________________________________________________________

    let pegaestado = document.querySelector("#estado");
    let resultadoestado = pegaestado.value;
    localStorage.setItem("Estado", resultadoestado)
     // _________________________________________________________________

     let pegasexo = document.querySelector("#sexo");
     let resultadosexo = pegasexo.value;
     localStorage.setItem("Sexo", resultadosexo)
    // __________________________________________________________________


    let pegaNome = document.querySelector("#nome");
    pegaNome.value;
    if (resultadoSenha == resultadoCSenha) {
        let pegar = document.querySelector("#click");
        pegar.style.display = "block"

    }
    else{
        alert("Suas senhas são diferentes");
       localStorage.removeItem("senhaConfirma");
       localStorage.removeItem("senha");
    }

    if(resultadoNome == "" || resultadoData == "" || resultadoEmail == "" || resultadoCSenha == "" || resultadoSenha == ""){
alert("Preencha todos os campos")
    }
    else{
      window.location ="../login/login.html"
    }
    
}

// ______________________________________________________


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
 




// ______________________________________________________


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
 

// ___________________________________________________

