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
 
// function vamo() {

//     const checkbox = document.getElementById("tema");
//     const isChecked = checkbox.checked;
//     if (isChecked) {
//       // o checkbox está marcado
//       let boddy = document.querySelector("body")
//             boddy.style.backgroundColor = "white"
//             let title = document.querySelector("h1")
//             title.style.color = "black"
//             let header = document.querySelector("header")
//             header.style.backgroundColor = "white"
//             let nav = document.querySelector("a")
//             nav.style.color = "black"
//             let sono = document.querySelector(".li a")
//             sono.style.color = "black"
//             let sono1 = document.querySelector(".li7 a")
//             sono1.style.color = "black"
//             let sono2 = document.querySelector(".li9 a")
//             sono2.style.color = "black"
//             let sono3 = document.querySelector("#join a")
//             sono3.style.color = "black"
//             let tite = document.getElementById("logo")
//             tite.style.color = "black"
//             let sun = document.querySelector(".material-symbols-outlined")
//             sun.style.color="black"
//     } else {
//       // o checkbox não está marcado
//       let boddy = document.querySelector("body")
//       boddy.style.backgroundColor = "black"
//       let title = document.querySelector("h1")
//       title.style.color = "white"
//       let header = document.querySelector("header")
//       header.style.backgroundColor = "black"
//       let nav = document.querySelector("a")
//       nav.style.color = "white"
//       let sono = document.querySelector(".li a")
//       sono.style.color = "white"
//       let sono1 = document.querySelector(".li7 a")
//       sono1.style.color = "white"
//       let sono2 = document.querySelector(".li9 a")
//       sono2.style.color = "white"
//       let sono3 = document.querySelector("#join a")
//       sono3.style.color = "white"
//       let tite = document.getElementById("logo")
//       tite.style.color = "white"
//       let sun = document.querySelector(".material-symbols-outlined")
//       sun.style.color="white"
//     }


// }