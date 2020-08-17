/** 
 * Scripts 
 */

;( ( w ) => {
    'use strict'

    /**
     * Script here!
     */
    $("#btn-search").click(function(e){
        e.preventDefault();
        $(".popup").addClass("pop");
        console.log("hell");
       
    });

    //slider reviews
    $('.slick-dots').on('init', function(event, slick){
        var $items = slick.$dots.find('li');
        $items.addClass('transparent-circle');
        $items.find('button').remove();
     });
    $('.__review-slider').slick({
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 2,
        slidesToScroll: 1,     
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });

    //Scroll mouse
    $('#mouse').click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop:   $('#services').offset().top - 100
        },800 );
    });
        
    //open menu right
    $('#__btn-menu').click(function (e) {
        e.preventDefault();
        $('.__modal-menu').addClass('active-modal-menu');
        $('body').addClass('hidden-body-scroll');
    });
    //close modal menu
    $('#close-modal-menu').click(function(e){
        e.preventDefault();
        $('.__modal-menu').removeClass('active-modal-menu');
        $('body').removeClass('hidden-body-scroll');
    });
    //Clic out modal hidden
    $(document).mouseup(function(e){
        e.preventDefault();
        var modalmenu = $('.__modal-menu');

        if(modalmenu.has(e.target).length === 0){   
            $('.__modal-menu').removeClass('active-modal-menu');
            $('body').removeClass('hidden-body-scroll');
        }
    });

    //Popup video
    $('#show_popup-video').magnificPopup({
        items: [
          {
            src: "https://www.youtube.com/watch?v=y_6aSG2yfe8",
            type: 'iframe',
          },
        ],
      });

    //Popup search
    $('#btn-search').click(function (e) {
        e.preventDefault();
        $('.search-box').addClass('active-search');
        $('body').addClass('hidden-body-scroll');
    });
    $('.closebtn').click(function (e) {
        e.preventDefault();
        $('.search-box').removeClass('active-search');
   
    });
    $('#mySearch').click(function(e){
        e.preventDefault();
        var searchBoxContent = $('.search-box-content');
        $('body').addClass('hidden-body-scroll');
        if(searchBoxContent.has(e.target).length === 0  )
        {   
            $('#mySearch').removeClass('active-search');  
            $('body').removeClass('hidden-body-scroll');        
        }
    });

} )( window )