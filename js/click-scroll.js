// //jquery-click-scroll
// //by syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5];

// $.each(sectionArray, function(index, value){
          
//      $(document).scroll(function(){
//          var offsetSection = $('#' + 'section_' + value).offset().top - 75;
//          var docScroll = $(document).scrollTop();
//          var docScroll1 = docScroll + 1;
         
        
//          if ( docScroll1 >= offsetSection ){
//              $('.navbar-nav .nav-item .nav-link').removeClass('active');
//              $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
//              $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//              $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//          }
         
//      });
    
//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 75;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     });
    
// });

// $(document).ready(function(){
//     $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
//     $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
//     $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
// });


// Updated jQuery click-scroll
// Compatible with descriptive section IDs

// Define your section IDs in order
const sectionArray = ['home', 'learning-levels', 'how-it-works', 'faqs', 'contact'];

$(document).ready(function () {
    // Set initial nav link classes
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');

    // Smooth scroll on nav click
    $('.click-scroll').each(function (index) {
        $(this).on('click', function (e) {
            e.preventDefault();
            const targetId = sectionArray[index];
            const target = document.getElementById(targetId);
            if (target) {
                const offsetTop = $(target).offset().top - 75;
                $('html, body').animate({ scrollTop: offsetTop }, 400);
            }
        });
    });

    // Scroll tracking
    $(window).on('scroll', function () {
        const scrollPosition = $(document).scrollTop() + 80;

        for (let i = 0; i < sectionArray.length; i++) {
            const target = document.getElementById(sectionArray[i]);
            if (target) {
                const sectionTop = $(target).offset().top;
                const nextSection = sectionArray[i + 1] ? document.getElementById(sectionArray[i + 1]) : null;
                const sectionBottom = nextSection ? $(nextSection).offset().top : Number.MAX_VALUE;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                    $('.navbar-nav .nav-item .nav-link').eq(i).addClass('active').removeClass('inactive');
                    break;
                }
            }
        }
    });
});
