// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
       $("#nav").addClass('navtops');
    } else {
     $("#nav").removeClass('navtops');
    }
}    

// Ecrire le titre par mot
var text = $('.typer-title');
if (text.typer) {
    text.typer(["Front-end Developer & Web Designer", "Welcome to my portfolio !"], {duration: 1000})    
} else {
    text.text("Front-end Developer & Web Designer")
}



$(document).ready(function() {
    $('#progress').removeClass('running');
    $('#progress').removeClass('running').delay(10).queue(function(next) {
        $(this).addClass('running');
        next();
    });
    
    $('#active-menu li').on('click', function(){
        $('#active-menu').addClass('hide-menu');
            $(".navbar").toggleClass("change");

    })
});

function myFunction(x) {
    $('#active-menu').toggleClass('hide-menu');
    x.classList.toggle("change");
}