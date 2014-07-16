
$('#servicios_descripcion #contables').addClass('visible');
  $('#servicios_descripcion #contables').animate({
    opacity: 1
  }, 100, function() {
    // Animation complete.
  });


$('#scroll-indicator').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 100, 'swing', function () {
      window.location.hash = target;
  });
});


$('#servicios_detalle #contables').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #contables').addClass('visible');
    $('#servicios_descripcion #contables').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #fiscales').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #fiscales').addClass('visible');
    $('#servicios_descripcion #fiscales').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #asesoria').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #asesoria').addClass('visible');
    $('#servicios_descripcion #asesoria').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #administrativa').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #administrativa').addClass('visible');
    $('#servicios_descripcion #administrativa').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #fiscal').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #fiscal').addClass('visible');
    $('#servicios_descripcion #fiscal').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #juridica').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #juridica').addClass('visible');
    $('#servicios_descripcion #juridica').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #recursos').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #recursos').addClass('visible');
    $('#servicios_descripcion #recursos').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #gestion').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #gestion').addClass('visible');
    $('#servicios_descripcion #gestion').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #facturacion').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #facturacion').addClass('visible');
    $('#servicios_descripcion #facturacion').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

$('#servicios_detalle #otros').hover(function() {
  $('.descripcion').animate({
    opacity: 0
  }, 100, function() {
    $('.descripcion').removeClass('visible');
    $('#servicios_descripcion #otros').addClass('visible');
    $('#servicios_descripcion #otros').animate({
      opacity: 1
    }, 100, function() {
      // Animation complete.
    });
  });
});

