

$('#clientes #uno').hover(function() {
  $('.descripciones').animate({
    opacity: 0
  }, 100, function() {
    $('.descripciones').removeClass('visible');
    $('#descripciones #uno descripcion').addClass('visible');
    $('#descrpciones #uno descrpcion').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#clientes #dos').hover(function() {
  $('.descripciones').animate({
    opacity: 0
  }, 100, function() {
    $('.descripciones').removeClass('visible');
    $('#descripciones #dos descripcion').addClass('visible');
    $('#descrpciones #dos descrpcion').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#clientes #tres').hover(function() {
  $('.descripciones').animate({
    opacity: 0
  }, 100, function() {
    $('.descripciones').removeClass('visible');
    $('#descripciones #tres descripcion').addClass('visible');
    $('#descrpciones #tres descrpcion').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});
