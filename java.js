let edad;
edad = prompt("Introduce tu edad");
if (edad >= 18){
alert("Puedes entrar, eres mayor de edad.");
} else {
alert("Eres menor de edad,entras bajo su responsabilidad.");
}

function prueba () {
    return confirm("Esta seguro de que desea salir?");

}
let enlace = document.querySelector(".enlace");
enlace.onclick = prueba;
