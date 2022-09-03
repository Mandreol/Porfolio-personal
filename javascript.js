const menuButton = document.querySelector("#menu-button");
const menuList = document.querySelector("#menu");
const contactMe = document.querySelector("#contactme");
const comunicacionButton = document.querySelector("#comunicacion-button");
const escuchaButton = document.querySelector("#escucha-button");
const agileButton = document.querySelector("#agile-button");
const tiempoButton = document.querySelector("#tiempo-button");
const comunicacionText = document.querySelector("#comunicacion");
const escuchaText = document.querySelector("#escucha");
const agileText = document.querySelector("#agile");
const tiempoText = document.querySelector("#tiempo");
let slider = document.querySelector("#slider");
let sliderSecction = document.querySelectorAll(".slider_section");
let sliderSecctionLast = sliderSecction[sliderSecction.length - 1];
const btnLeft = document.querySelector("#slider_btn--left");
const btnRight = document.querySelector("#slider_btn--rigth");

menuButton.addEventListener("click", menu);
contactMe.addEventListener("click", contactMeDesplegar);
comunicacionButton.addEventListener("click", comunicacionDesplegar);
escuchaButton.addEventListener("click", escuchaDesplegar);
agileButton.addEventListener("click", agileDesplegar);
tiempoButton.addEventListener("click", tiempoDesplegar);
btnRight.addEventListener("click", next);
btnLeft.addEventListener("click", previus);
function menu() {
	menuList.classList.toggle("desplegar_menu");
}
function contactMeDesplegar() {
	contactMe.children[1].childNodes[3].toggleClass("desplegar");
}
function comunicacionDesplegar() {
	tiempoText.classList.remove("desplegar");
	agileText.classList.remove("desplegar");
	escuchaText.classList.remove("desplegar");
	comunicacionText.classList.toggle("desplegar");
}
function escuchaDesplegar() {
	tiempoText.classList.remove("desplegar");
	agileText.classList.remove("desplegar");
	comunicacionText.classList.remove("desplegar");
	escuchaText.classList.toggle("desplegar");
}
function agileDesplegar() {
	tiempoText.classList.remove("desplegar");
	comunicacionText.classList.remove("desplegar");
	escuchaText.classList.remove("desplegar");
	agileText.classList.toggle("desplegar");
}
function tiempoDesplegar() {
	comunicacionText.classList.remove("desplegar");
	escuchaText.classList.remove("desplegar");
	agileText.classList.remove("desplegar");
	tiempoText.classList.toggle("desplegar");
}
function next() {
	let sliderSecctionFirst = document.querySelectorAll(".slider_section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all .5s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement("beforeend", sliderSecctionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
}
function previus() {
	let sliderSecction = document.querySelectorAll(".slider_section");
	let sliderSecctionLast = sliderSecction[sliderSecction.length - 1];
	slider.style.marginLeft = "0%";
	slider.style.transition = "all .5s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSecctionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
}
