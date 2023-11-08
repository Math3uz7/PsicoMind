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
 