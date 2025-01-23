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
 
// _______________________________________________________________

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
 
