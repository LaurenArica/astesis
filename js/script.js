// Funcion para ejecutar el efecto de movimiento en las palabras
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


// Función para mostrar el preloader y colocar el fixed el navbar
$(function () {
  $(window).on('load', function (event) {
      $('.preloader').delay(2000).fadeOut(100);
  });
  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 0) {
          $(".navbar").removeClass("fixed-top");
      } else {
          $(".navbar").addClass("fixed-top")
      }
  });
});


// Obtener el año actual para el footer
var annio = (new Date).getFullYear();
$(document).ready(function() {
  $("#annio").text( annio );
});



// Contador de los atributos de la parte de inicio
$(document).ready(function() {
  setTimeout(startCounting, 2500); 
});

function startCounting() {
  var counter = $("#numero_experiencia");
  var counter2 = $("#numero_proyectos");
  var counter3 = $("#atencion");
  var count = 1;
  var count2 = 1;
  var count3 = 1;
  

  var interval = setInterval(function() {
    counter.text(count);

    if (count === 6) {
      clearInterval(interval);
    }

    count++;
  }, 1200);

  var interval2 = setInterval(function() {
    counter2.text(count2);

    if (count2 === 1800) {
      clearInterval(interval2);
    }

    count2++;
  }, 1);

  var interval3 = setInterval(function() {
    counter3.text(count3+"%");

    if (count3 === 100) {
      clearInterval(interval3);
    }

    count3++;
  }, 75);
}

(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
      }

      form.classList.add('was-validated')
      }, false)
  })
})()

console.log("JavaScrip")