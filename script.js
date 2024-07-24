var navBar=document.getElementById("nav-bar")
var sobreMiContainer=document.getElementById("casa")
var habilidadesContainer=document.getElementById("overMe")
function ocultarBarra() {
    navBar.classList.remove("mostrar")
}
function mostrarBarra(){
navBar.classList.add("mostrar")
}
var boton=document.getElementById("yija")
var acumulador=0
var mainContainer=document.getElementById("main")
var info=document.getElementById("text")
function darknessMode(){
    
    boton.classList.toggle('flipped');
    acumulador=acumulador+1;
    if (acumulador%2==1) {
        mainContainer.classList.add("day-mode")
        sobreMiContainer.classList.add("day-mode")
        habilidadesContainer.classList.add("day-mode")
        info.classList.add("font")

    }else{
        mainContainer.classList.remove("day-mode") 
        sobreMiContainer.classList.remove("day-mode")
        habilidadesContainer.classList.remove("day-mode")
        info.classList.remove("font")
    }   
    }

function abrirSobreMi() {
habilidadesContainer.classList.add("minimizar")
}
function abrirSkills() {
    habilidadesContainer.classList.remove("minimizar")
    habilidadesContainer.classList.add("maximizar")
}