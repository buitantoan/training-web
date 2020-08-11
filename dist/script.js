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
    });

} )( window )