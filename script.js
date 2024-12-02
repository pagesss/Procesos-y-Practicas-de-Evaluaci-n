const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 150);
});


let menu = document.querySelector("#menu-icon");
let navlink = document.querySelector(".navlinks"); 

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlink.classList.toggle("open")
}