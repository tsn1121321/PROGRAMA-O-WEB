$(document).ready(function() {
    // Carregamento do conteúdo por scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.nav-links').addClass('sticky');
        } else {
            $('.nav-links').removeClass('sticky');
        }
    });

    // Suavização do scroll para os links do menu
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Scroll suave para o formulário de contato
    $('button[href^="#contact"]').on('click', function(event) {
        var target = $('#contact');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
