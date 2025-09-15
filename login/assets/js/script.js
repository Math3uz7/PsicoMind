// function entrar() {

//     let email = document.querySelector("#meuEmail")
//     let valoremail = email.value

//     let senha = document.querySelector("#minhaSenha")
//     let valorsenha = senha.value

//     let getEmail = localStorage.getItem("Email")
//     let getSenha = localStorage.getItem("senha")



//  if (getEmail == valoremail && getSenha == valorsenha) {
      

//   let perfil2 =  document.querySelector(".perfil").style.display = "block"
//   let local2 = document.getElementById("join").style.display = "none"
  
//   localStorage.setItem("entre" , perfil2)
//   localStorage.setItem("perfil", local2)
// }


//  if(getEmail != valoremail || getSenha != valorsenha || valoremail == null || valorsenha == null){
//   alert("Falha ao entrar")
  
//   let perfil2 =  document.querySelector(".perfil").style.display = "none"    
//   let local2 = document.getElementById("join").style.display = "block"


//   localStorage.setItem("entre" , perfil2)
//   localStorage.setItem("perfil", local2)

//  }


// }


// function entrar() {
//   let email = document.querySelector("#meuEmail");
//   let senha = document.querySelector("#minhaSenha");

//   let valoremail = email ? email.value.trim() : "";
//   let valorsenha = senha ? senha.value.trim() : "";

//   let getEmail = localStorage.getItem("Email");
//   let getSenha = localStorage.getItem("senha");

//   let perfil2 = document.querySelector(".perfil");
//   let local2 = document.getElementById("join");

//   // Verifica se o localStorage tem os dados cadastrados
//   if (!getEmail || !getSenha) {
//       alert("Nenhum usuário cadastrado! Faça seu cadastro primeiro.");
//       return;
//   }

//   // Verifica se os campos foram preenchidos
//   if (!valoremail || !valorsenha) {
//       alert("Por favor, preencha todos os campos.");
//       return;
//   }

//   // Validação do login
//   if (getEmail === valoremail && getSenha === valorsenha) {
//       alert("Login bem-sucedido!");

//       if (perfil2) perfil2.style.display = "block";
//       if (local2) local2.style.display = "none";

//       localStorage.setItem("entre", "true"); // Indica que o usuário está logado
//   } else {
//       alert("Email ou senha incorretos!");

//       if (perfil2) perfil2.style.display = "none";
//       if (local2) local2.style.display = "block";

//       localStorage.setItem("entre", "false"); // Indica falha no login
//   }
// }


function entrar() {
  let email = document.querySelector("#meuEmail");
  let senha = document.querySelector("#minhaSenha");

  let valoremail = email ? email.value.trim() : "";
  let valorsenha = senha ? senha.value.trim() : "";

  let getEmail = localStorage.getItem("Email");
  let getSenha = localStorage.getItem("senha");

  let perfil2 = document.querySelector(".perfil");
  let local2 = document.getElementById("join");

  // Verifica se há usuário cadastrado no localStorage
  if (!getEmail || !getSenha) {
      alert("Nenhum usuário cadastrado! Faça seu cadastro primeiro.");
      return;
  }

  // Verifica se os campos foram preenchidos
  if (!valoremail || !valorsenha) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  // Validação do login
  if (getEmail === valoremail && getSenha === valorsenha) {
      alert("Login bem-sucedido!");

      if (perfil2) perfil2.style.display = "block";
      if (local2) local2.style.display = "none";

      localStorage.setItem("entre", "true"); // Indica que o usuário está logado permanentemente
  } else {
      alert("Email ou senha incorretos!");

      if (perfil2) perfil2.style.display = "none";
      if (local2) local2.style.display = "block";

      localStorage.setItem("entre", "false"); // Indica falha no login
  }
}

// Função para verificar o estado do login ao carregar a página
function verificarLogin() {
  let perfil2 = document.querySelector(".perfil");
  let local2 = document.getElementById("join");

  let estaLogado = localStorage.getItem("entre");

  if (estaLogado === "true") {
      if (perfil2) perfil2.style.display = "block";
      if (local2) local2.style.display = "none";
  } else {
      if (perfil2) perfil2.style.display = "none";
      if (local2) local2.style.display = "block";
  }
}

// Verifica o login assim que a página é carregada
document.addEventListener("DOMContentLoaded", verificarLogin);
