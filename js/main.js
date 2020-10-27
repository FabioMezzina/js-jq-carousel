// references
var images = $('.images');
var imgPrecedente = $('.prev');
var imgSuccessiva = $('.next');
// evento click per immagine precedente
imgPrecedente.click( function() {
  scroll('prec');
});
// evento click per immagine successiva
imgSuccessiva.click( function() {
  scroll('succ');
});
// evento scroll immagini con freccette tastiera
$(document).keydown(function (event) {
  switch (event.keyCode) {
    case 37:
      scroll('prec');
      break;
    case 39:
      scroll('succ');
      break;
  }
});

// DICHIARAZIONE FUNZIONE
function scroll (direction) {
  var imgAttuale = $('.images img.visible');
  if (direction === 'prec') {
    if (imgAttuale.hasClass('first')) {
      imgAttuale.removeClass('visible');
      images.find('img.last').addClass('visible');
    } else {
      imgAttuale.removeClass('visible');
      imgAttuale.prev('img').addClass('visible');
    }
  } 
  else if (direction === 'succ') {
    if (imgAttuale.hasClass('last')) {
      imgAttuale.removeClass('visible');
      images.find('img.first').addClass('visible');
    } else {
      imgAttuale.removeClass('visible');
      imgAttuale.next('img').addClass('visible');
    }
  }
}