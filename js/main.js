$(document).ready(function () {
  // references
  var images = $('.images');
  var imgPrecedente = $('.prev');
  var imgSuccessiva = $('.next');
  var shotList = $('.shots');
  var index = 1;
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
  $('li.one').click( function() {
    shotScroll(1);
  });
  $('li.two').click( function() {
    shotScroll(2);
  });
  $('li.three').click( function() {
    shotScroll(3);
  });
  $('li.four').click( function() {
    shotScroll(4);
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
        index = 4;
      } else {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.prev('img').addClass('visible');
        shotAttuale.prev('li').addClass('active');
        index--;
      }
    } 
    else if (direction === 'succ') {
      if (imgAttuale.hasClass('last')) {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        images.find('img.first').addClass('visible');
        shotList.find('li.first').addClass('active');
        index = 1;
      } else {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.next('img').addClass('visible');
        shotAttuale.next('li').addClass('active');
        index++;
      }
    }
  }

  /**
   * Al click di un pallino, effettua uno scroll di immagini fino ad arrivare a quella desiderata
   * @param {number} j posizione relativa all'immagine da visualizzare
   */
  function shotScroll(j) {
    var imgAttuale = $('.images img.visible');
    var shotAttuale = $('.shots li.active');
    if (j > index) {
      while (j > index) {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.next('img').addClass('visible');
        shotAttuale.next('li').addClass('active');
        imgAttuale = $('.images img.visible');
        shotAttuale = $('.shots li.active');
        index++;
      }
    } else if (j < index) {
      while (j < index) {
        imgAttuale.removeClass('visible');
        shotAttuale.removeClass('active');
        imgAttuale.prev('img').addClass('visible');
        shotAttuale.prev('li').addClass('active');
        imgAttuale = $('.images img.visible');
        shotAttuale = $('.shots li.active');
        index--;
      }
    }
  }

});