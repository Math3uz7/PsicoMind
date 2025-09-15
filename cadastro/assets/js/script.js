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

