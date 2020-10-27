var images = $('.images');
var imgPrecedente = $('.prev');
var imgSuccessiva = $('.next');

imgPrecedente.click( function() {
  scroll('prec');
});

imgSuccessiva.click( function() {
  scroll('succ');
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