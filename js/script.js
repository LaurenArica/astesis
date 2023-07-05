// Funcion para dejar de mostrar el preloader y mostrar la pgina
window.onload = () => {
    let loader = document.getElementById("preloader")
    setTimeout(() => {
        loader.style.display = "none";
    },9000)
}

// Funcion para ejecutar el efecto de la plabra en movimiento
let app = document.getElementById('preloader-text');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});
typewriter
  .pauseFor(500)
  .typeString('AS TESIS')
  .pauseFor(400)
  .deleteChars(10)
  .start();