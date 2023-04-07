let imgOjo = document.querySelector(".imagen-ojo");
let buttonOjo = document.querySelector(".boton-contraseña");
let inputaContraseña = document.querySelector(".input-contraseña");
let longitudContraseña = document.querySelector(".longitud");
let numerosContraseña = document.querySelector(".cantidad-numeros");
let simbolosEspecialesContraseña = document.querySelector(
  ".catidad-simbolos-especiales"
);
let mayusculasContraseña = document.querySelector(".catidad-mayusculas");
let rayasContraseña = document.querySelectorAll(".rayas");
let tituloSeguridad = document.querySelector(".titulo-seguridad");
let imagenCopiaPega = document.querySelector("#boton-copia-pega");

/* FUNCION COPIAR TEXTO A PORTAPAPELES*/

function copiarTexto() {
  navigator.clipboard.writeText(inputaContraseña.value);
}

/* CAMBIA EL BOTON DE LA CONTRASEÑA PARA VER EL INPUT DE PASSWORD A TEXT Y TAMBIEN LA IMAGEN */

let ojoAbierto = "/imagenes ojos/eye-open.png";
let ojoCerrado = "/imagenes ojos/eye-close.png";

buttonOjo.addEventListener("click", function () {
  if (imgOjo.getAttribute("src") == "/imagenes ojos/eye-open.png") {
    imgOjo.setAttribute("src", "/imagenes ojos/eye-close.png");
    inputaContraseña.type = "text";
  } else {
    imgOjo.setAttribute("src", "/imagenes ojos/eye-open.png");
    inputaContraseña.type = "password";
  }
});

/* EVENTLISTENER PARA COMPROBAR LOS PARAMETROS */

inputaContraseña.addEventListener("input", function () {
  /* REGEX LONGITUD DE CONTRASEÑA */
  let regexLetras = /[a-zA-Z0-9!@#$%^&*()_+={}[\]|\\:;"'<,>.?/`~]/g;
  let letras = inputaContraseña.value.match(regexLetras);
  let cantidadLetras = letras ? letras.length : 0;
  longitudContraseña.innerHTML = cantidadLetras;
  /* REGEX NUMEROS EN CONTRASEÑA */
  let regexNumeros = /[0-9]/g;
  let numeros = inputaContraseña.value.match(regexNumeros);
  let cantidadNumeros = numeros ? numeros.length : 0;
  numerosContraseña.innerHTML = cantidadNumeros;

  /* REGEX SIMBOLOS ESPECIALES EN CONTRASEÑA */
  let regexSimbolosEspeciales = /[~`!@#$%^&*()\-_=+\[\]{}\\|;:'",.<>\/?]/g;
  let simbolosEspeciales = inputaContraseña.value.match(
    regexSimbolosEspeciales
  );
  let cantidadSimbolosEspeciales = simbolosEspeciales
    ? simbolosEspeciales.length
    : 0;
  simbolosEspecialesContraseña.innerHTML = cantidadSimbolosEspeciales;

  /* REGEX MAYUSCULAS EN CONTRASEÑA */
  let regexMayusculas = /[A-Z]/g;
  let mayusculas = inputaContraseña.value.match(regexMayusculas);
  let catidadMayusculas = mayusculas ? mayusculas.length : 0;
  mayusculasContraseña.innerHTML = catidadMayusculas;

  switch (true) {
    /* CASO CONTRASEÑA  SIN INPUT */
    case inputaContraseña.value.length < 1:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.remove(
          "muy-debil",
          "debil",
          "bien",
          "fuerte",
          "muy-fuerte"
        );
        tituloSeguridad.style.color = "#FFF";
        tituloSeguridad.innerHTML = "";
      });
      break;
    /* CASO CONTRASEÑA  MUY DEBIL */
    case inputaContraseña.value.length < 8:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.add("muy-debil");
        elemento.classList.remove("debil", "bien", "fuerte", "muy-fuerte");
        tituloSeguridad.style.color = "#ff0000";
        tituloSeguridad.innerHTML = "MUY DEBIL";
      });

      break;

    /* CASO CONTRASEÑA DEBIL */
    case inputaContraseña.value.length >= 8 &&
      inputaContraseña.value.length < 10:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.add("debil");
        elemento.classList.remove("muy-debil", "bien", "fuerte", "muy-fuerte");
        tituloSeguridad.style.color = "#ff5555";
        tituloSeguridad.innerHTML = "DEBIL";
      });
      break;

    /* CASO CONTRASEÑA BIEN */
    case inputaContraseña.value.length >= 10 &&
      inputaContraseña.value.length < 15:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.add("bien");
        elemento.classList.remove("muy-debil", "debil", "fuerte", "muy-fuerte");
        tituloSeguridad.style.color = "#d9ff00";
        tituloSeguridad.innerHTML = "BIEN";
      });
      break;

    /* CASO CONTRASEÑA FUERTE */
    case inputaContraseña.value.length >= 15 &&
      inputaContraseña.value.length < 20:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.add("fuerte");
        elemento.classList.remove("muy-debil", "debil", "bien", "muy-fuerte");
        tituloSeguridad.style.color = "#63fe58";
        tituloSeguridad.innerHTML = "FUERTE";
      });
      break;

    /* CASO CONTRASEÑA MUY FUERTE */
    case inputaContraseña.value.length >= 20:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.add("muy-fuerte");
        elemento.classList.remove("muy-debil", "debil", "bien", "fuerte");
        tituloSeguridad.style.color = "#00ff1e";
        tituloSeguridad.innerHTML = "MUY FUERTE";
      });
      break;

    default:
      rayasContraseña.forEach((elemento) => {
        elemento.classList.remove(
          "muy-debil",
          "debil",
          "bien",
          "fuerte",
          "muy-fuerte"
        );
      });
      break;
  }
});
