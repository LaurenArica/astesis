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


// Función para mostrar el preloader y colocar anclar el navbar
$(function () {
  $(window).on('load', function (event) {
      $('.preloader').delay(3000).fadeOut(500);
  });
  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 0) {
          $(".navbar").removeClass("sticky-top");
      } else {
          $(".navbar").addClass("sticky-top")
      }
  });

  
});