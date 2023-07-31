// Función para mostrar el preloader y colocar el fixed el navbar
$(function () {
  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 0) {
          $(".navbar").removeClass("fixed-top");
      } else {
          $(".navbar").addClass("fixed-top")
      }
  });

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
