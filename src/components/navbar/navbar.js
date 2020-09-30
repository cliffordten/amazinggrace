/* eslint-disable no-undef */
import $ from 'jquery'

if ($(window).width() > 992) {
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 10) {
            $('#navbar_top').addClass("fixed-top").removeClass('bg-primary').addClass('bg-light');
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            $('body').css('transition', '1s');

            $('.bg-dark').css("min-height", "630px");
        }else{
            $('#navbar_top').removeClass("fixed-top").addClass('bg-primary').removeClass('bg-light');
            $('.bg-dark').css("min-height", "450px");
            $('body').css('padding-top', '0');
            $('body').css('transition', '1s');
        }   
    });
} 