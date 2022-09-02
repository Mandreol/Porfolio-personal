const menuButton = document.querySelector("#menu-button");
const menuList = document.querySelector("#menu");
const comunicacionButton = document.querySelector("#comunicacion-button");
const escuchaButton = document.querySelector("#escucha-button");
const agileButton = document.querySelector("#agile-button");
const tiempoButton = document.querySelector("#tiempo-button");
const comunicacionText = document.querySelector("#comunicacion");
const escuchaText = document.querySelector("#escucha");
const agileText = document.querySelector("#agile");
const tiempoText = document.querySelector("#tiempo");

menuButton.addEventListener("click", menu);
comunicacionButton.addEventListener("click", comunicacionDesplegar);
escuchaButton.addEventListener("click", escuchaDesplegar);
agileButton.addEventListener("click", agileDesplegar);
tiempoButton.addEventListener("click", tiempoDesplegar);

function menu() {
	console.log("click");
	menuList.classList.toggle("desplegar_menu");
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
