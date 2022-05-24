var settingsmenu = document.querySelector(".nav_hover");
var DarkMode = document.getElementById("darkbtn");

function settings_toggle(){
     settingsmenu.classList.toggle("nav_hover_height");
}
function Dark_mode_on(){
     DarkMode.classList.toggle("dark_on");
     document.body.classList.toggle("dark-theme");
}