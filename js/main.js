(function ($) {
    "use strict";

    var year = new Date().getFullYear();
    $("#year").html(year);

    var mobile = false;

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
            mobile = true;
    }

    $('#plan-basico').hover(function() {
        $('#plan-basico').addClass('animate__animated animate__pulse');
    });

    $('#plan-basico').mouseleave(function() {
        $('#plan-basico').removeClass('animate__animated animate__pulse');
    });
    
    $('#plan-emprendedor').hover(function() {
        $('#plan-emprendedor').addClass('animate__animated animate__pulse');
    });

    $('#plan-emprendedor').mouseleave(function () { 
        $('#plan-emprendedor').removeClass('animate__animated animate__pulse');
    });
   
    $('#plan-empresarial').hover(function() {
        $('#plan-empresarial').addClass('animate__animated animate__pulse');
    });

    $('#plan-empresarial').mouseleave(function () { 
        $('#plan-empresarial').removeClass('animate__animated animate__pulse');
    });

    var particlesConfig = {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 400
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    };

    particlesJS("particles-js", particlesConfig);
    particlesJS("particles-js2", {...particlesConfig,});

    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        infinite: true,
        slidesToScroll: (mobile)? 3 : 6,
        slidesToShow: (mobile)? 3 : 6
    });

    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function changePlan(plan) {

    if(plan == "mensual"){
        $("#btnAnual").removeClass("btn-success");
        $("#btnMensual").addClass("btn-success");
        $("#btnAnual").addClass("btn-secondary");
        $(".descuento").addClass("text-hide");
        
        $("#precio-uno").html("S/35");
        $("#precio-dos").html("S/40");
        $("#precio-tres").html("S/50");
        
        $("#precio-uno-viejo").html("S/40");
        $("#precio-dos-viejo").html("S/50");
        $("#precio-tres-viejo").html("S/60");
    }
    
    if(plan == "anual"){
        $("#btnMensual").removeClass("btn-success");
        $("#btnAnual").addClass("btn-success");
        $("#btnMensual").addClass("btn-secondary");
        $(".descuento").removeClass("text-hide");

        $("#precio-uno").html("S/357");
        $("#precio-dos").html("S/408");
        $("#precio-tres").html("S/510");

        $("#precio-uno-viejo").html("S/420");
        $("#precio-dos-viejo").html("S/480");
        $("#precio-tres-viejo").html("S/600");
    }
}

