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
 
