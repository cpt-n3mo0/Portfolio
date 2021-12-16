var nav_icon = document.querySelector(".nav-icon");
var bars = document.querySelector(".fa-bars");
var nav = document.querySelector("nav");
nav_icon.onclick = function toggle(){
	nav_icon.classList.toggle('active');
	bars.classList.toggle('active');
	nav.classList.toggle('active');
};