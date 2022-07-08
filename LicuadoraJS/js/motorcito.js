var estadoLicuadora="apagado";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora(){

    if(estadoLicuadora== "apagado"){
        estadoLicuadora="encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
    } else{
        estadoLicuadora="apagado";
        hacerBrrBrr();
        licuadora.classList.remove("active");
    }
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime=0;
    }
}