$(document).ready(function () {
  // references
  var images = $('.images');
  var imgPrecedente = $('.prev');
  var imgSuccessiva = $('.next');
  var shotList = $('.shots');
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

  // evento scroll cliccando sui pallini
  var pallini = $('.shots li');
  pallini.click( function() {
    var imgAttuale = $('.images img.visible');
    var shotAttuale = $('.shots li.active');
    imgAttuale.removeClass('visible');
    shotAttuale.removeClass('active');
    var index = $(this).index();
    $(this).addClass('active');
    imgAttuale = $('.images img').eq(index);
    imgAttuale.addClass('visible');
  });

  // DICHIARAZIONE FUNZIONE
  
  /**
   * Visualizza l'immagine successiva o precedente in base alla direzione cliccata
   * @param {string} direction prev o succ in base alla direzione di scrolling cliccata
   */
  function scroll (direction) {
    var imgAttuale = $('.images img.visible');
    var shotAttuale = $('.shots li.active');
    if (direction === 'prec') {
      if (imgAttuale.hasClass('first')) {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        images.find('img.last').addClass('visible');
        shotList.find('li.last').addClass('active');
      } else {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.prev('img').addClass('visible');
        shotAttuale.prev('li').addClass('active');
      }
    } 
    else if (direction === 'succ') {
      if (imgAttuale.hasClass('last')) {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        images.find('img.first').addClass('visible');
        shotList.find('li.first').addClass('active');
      } else {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.next('img').addClass('visible');
        shotAttuale.next('li').addClass('active');
      }
    }
  }
});