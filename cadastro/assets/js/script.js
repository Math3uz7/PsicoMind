function take() {
  let pegaNome0 = document.querySelector("#nome");
  let resultadoNome = pegaNome0 ? pegaNome0.value : "";
  localStorage.setItem("nome", resultadoNome);

  let pegaData = document.querySelector("#date");
  let resultadoData = pegaData ? pegaData.value : "";
  localStorage.setItem("data de nascimento", resultadoData);

  let pegaEmail = document.querySelector("#email");
  let resultadoEmail = pegaEmail ? pegaEmail.value : "";
  localStorage.setItem("Email", resultadoEmail);

  let pegaSenha = document.querySelector("#senha");
  let resultadoSenha = pegaSenha ? pegaSenha.value : "";
  localStorage.setItem("senha", resultadoSenha);

  let pegaCSenha = document.querySelector("#confSenha");
  let resultadoCSenha = pegaCSenha ? pegaCSenha.value : "";
  localStorage.setItem("senhaConfirma", resultadoCSenha);

  let pegaCEP = document.querySelector("#CEP");
  let resultadoCEP = pegaCEP ? pegaCEP.value : "";
  localStorage.setItem("CEP", resultadoCEP);

  let pegarua = document.querySelector("#rua");
  let resultadorua = pegarua ? pegarua.value : "";
  localStorage.setItem("Rua", resultadorua);

  let pegacidade = document.querySelector("#cidade");
  let resultadocidade = pegacidade ? pegacidade.value : "";
  localStorage.setItem("Cidade", resultadocidade);

  let pegaestado = document.querySelector("#estado");
  let resultadoestado = pegaestado ? pegaestado.value : "";
  localStorage.setItem("Estado", resultadoestado);

  let pegasexo = document.querySelector("#sexo");
  let resultadosexo = pegasexo ? pegasexo.value : "";
  localStorage.setItem("Sexo", resultadosexo);


  // Verificação de campos vazios antes de validar senhas
  if (resultadoNome === "" || resultadoData === "" || resultadoEmail === "" || resultadoCSenha === "" || resultadoSenha === "") {
      alert("Preencha todos os campos");
      let link = document.getElementById("link");
      link.href = "./cadastro.html"
      return;
  }


  // Verificação de senha antes de exibir o botão
  if (resultadoSenha === resultadoCSenha) {
      let pegar = document.querySelector("#click");
      if (pegar) {
          pegar.style.display = "block";
          alert("Cadastro Concluido com Sucesso !")
          let link = document.getElementById("link");
          link.href = "../login/login.html"
      }
  } else {
      alert("Suas senhas são diferentes");

      let link = document.getElementById("link");
      link.href = "./cadastro.html"

      localStorage.removeItem("senha");
      localStorage.removeItem("senhaConfirma");
      localStorage.removeItem("Estado");
      localStorage.removeItem("CEP");      
      localStorage.removeItem("Rua");
      localStorage.removeItem("Cidade");
      localStorage.removeItem("Sexo");
      localStorage.removeItem("nome");      
      localStorage.removeItem("data de nascimento");
      localStorage.removeItem("Email");      
    }

    link.setAttribute("href", "../login/login.html");

}



// function take() {
    
//     let pegaNome0= document.querySelector("#nome");
//     let resultadoNome = pegaNome0.value;
//     localStorage.setItem("nome", resultadoNome);

//     // _________________________________________________________________

//     let pegaData = document.querySelector("#date");
//     let resultadoData = pegaData.value;
//     localStorage.setItem("data de nascimento", resultadoData);
    
//     // _________________________________________________________________
    
//     let pegaEmail = document.querySelector("#email");
//     let resultadoEmail = pegaEmail.value;
//     localStorage.setItem("Email", resultadoEmail);

//     // _________________________________________________________________

//     let pegaSenha = document.querySelector("#senha");
//     let resultadoSenha = pegaSenha.value;
//     localStorage.setItem("senha", resultadoSenha);
    
//     // _________________________________________________________________
    
//     let pegaCSenha = document.querySelector("#confSenha");
//     let resultadoCSenha = pegaCSenha.value;
//     localStorage.setItem("senhaConfirma", resultadoCSenha);
    
//     // _________________________________________________________________
    
//     let pegaCEP = document.querySelector("#CEP");
//     let resultadoCEP = pegaCEP.value;
//     localStorage.setItem("CEP", resultadoCEP);

//     // __________________________________________________________________

//     let pegarua = document.querySelector("#rua");
//     let resultadorua = pegarua.value;
//     localStorage.setItem("Rua", resultadorua);

//     // __________________________________________________________________
    
//     let pegacidade = document.querySelector("#cidade");
//     let resultadocidade = pegacidade.value;
//     localStorage.setItem("Cidade", resultadocidade);
    
//     // __________________________________________________________________
    
//     let pegaestado = document.querySelector("#estado");
//     let resultadoestado = pegaestado.value;
//     localStorage.setItem("Estado", resultadoestado);
//     // _________________________________________________________________

//     let pegasexo = document.querySelector("#sexo");
//     let resultadosexo = pegasexo.value;
//     localStorage.setItem("Sexo", resultadosexo);
//     // __________________________________________________________________


//     let pegaNome = document.querySelector("#nome");
//     pegaNome.value;

//     if (resultadoSenha == resultadoCSenha) {
//         let pegar = document.querySelector("#click");
//         pegar.style.display = "block";

//     }
//     else{
//        alert("Suas senhas são diferentes");
//        localStorage.removeItem(resultadoSenha);
//        localStorage.removeItem(resultadoCSenha);
//     }




//     if(resultadoNome == "" || resultadoData == "" || resultadoEmail == "" || resultadoCSenha == "" || resultadoSenha == ""){
//       alert("Preencha todos os campos");
//     }

// ___________________________________________________________________________________ DIV
    

//     let guardaNome = localStorage.getItem("nome", resultadoNome);
//     let guardaData = localStorage.getItem("date", resultadoData);
//     let guardaEmail = localStorage.getItem("email", resultadoEmail);
//     let guardaSenha = localStorage.getItem("senha", resultadoSenha);
//     let guardaCSenha = localStorage.getItem("confSenha", resultadoCSenha);
    
    
//     if(resultadoNome == guardaNome || resultadoData == guardaData || resultadoEmail == guardaEmail || resultadoCSenha == guardaCSenha || resultadoSenha == guardaSenha){
      
//       alert("Cadastro Concluido"); 
//       valida.localStorage.setitem("bi", 1);
  
      
//       let perfil2 =  document.querySelector(".perfil").style.display = "block";
//       let local2 = document.getElementById("join").style.display = "none";
      
//       localStorage.setItem("entre" , perfil2);
//       localStorage.setItem("perfil", local2);
  
//       window.location = ".../login/login.html";
  
// }

    
    //  if (valida == 1) {
          
    
      
    // }
    // else if(valida == null){
      
    //   let perfil2 =  document.querySelector(".perfil").style.display = "none";  
    //   let local2 = document.getElementById("join").style.display = "block";
    
    
    //   localStorage.setItem("entre" , perfil2);
    //   localStorage.setItem("perfil", local2);
    
    
    //  }
     
// }


// ______________________________________________________



// ______________________________________________________


// const changeTheme = document.getElementById("tema")

// function blackTheme(){
//   document.body.classList.toggle("white")
// }

// function loadTheme(){
//   const blackMode = localStorage.getItem("white") 

// if(blackMode){
// blackTheme()
//   }
// }

// loadTheme();

// changeTheme.addEventListener("change",function(){
//   blackTheme()


// localStorage.removeItem("white")


// if(document.body.classList.contains("white")){
// localStorage.setItem("white",1)
// }
  

// })
 

// // ___________________________________________________

