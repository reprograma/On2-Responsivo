const menu = document.querySelector(".menu-responsivo_header")
const nav = document.querySelector(".navbar-none")

menu.addEventListener("click", function(e){
  
    e.preventDefault()


    if (nav.className === "navbar-none") {
        nav.className += " nav-responsive";
    } else {
        nav.className = "navbar-none";
    }
})