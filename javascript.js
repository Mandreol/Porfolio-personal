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
	console.log("click");
	comunicacion.classList.toggle("desplegar");
}
function escuchaDesplegar() {
	console.log("click");
	escucha.classList.toggle("desplegar");
}
function agileDesplegar() {
	console.log("click");
	agile.classList.toggle("desplegar");
}
function tiempoDesplegar() {
	console.log("click");
	tiempo.classList.toggle("desplegar");
}
