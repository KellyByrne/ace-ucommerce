import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-home-int-header',
  templateUrl: './home-int-header.component.html',
  styleUrls: ['./home-int-header.component.css']
})
export class HomeIntHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      function adjustHeader() {
        if (Math.max($(window).width(), window.innerWidth) > 1023) {
            if ($(window).scrollTop() > $('.hdr-container').outerHeight()) {
                if ($('.transheader').css("display") == "none") {
                    $('.transheader').addClass('fixed');
                    $('.transheader').slideDown(500, function () {
                        var naver = $('header.desktoponly .hdr-info-bot').parent().detach();
                        $('.transnav').append(naver);
                        //$('.transnav').html($('.hdr-info-bot').parent()[0].outerHTML);
                    });
                }
            } else {
                if ($('.hamburger').hasClass("is-active")) {
                    var naver = $('.transnav .hdr-info-bot').parent().detach();
                    $('header.desktoponly .hdr-info').append(naver);

                    $('.transnav').slideUp(500, function () {
                        $('.hamburger').removeClass("is-active");
                        $('.transheader').slideUp(500);
                    });
                } else {
                    $('.transheader').slideUp(500);

                    var naver = $('.transnav .hdr-info-bot').parent().detach();
                    $('header.desktoponly .hdr-info').append(naver);


                }
            }
        }
    }
    var pather = "/enroll/?sh=e&amp;pid=&amp;refURL=https://www.pennfoster.edu/college";
    var pather2 = "/request-info-form";

    $(".enrollnow").attr("href", pather);
    $(".getinfo").attr("href", pather2);

  if (Math.max($(window).width(), window.innerWidth) > 1023) { //desktop
    if ($('.mobilenav nav').length != 0 && $('.hdr-info-bot nav').length == 0) {
        var dnav = $('.mobilenav nav').detach();
        $('.hdr-info-bot').append(dnav);
    }

    $('.search-query').attr('value','');
     $(".search-query").closest('form').trigger('reset');
    if ($('.mobilenav .msearch').length != 0 && $('.searchbar form').length == 0) {
        var dsearch = $('.mobilenav .msearch .row').detach();
        $('.mobilenav .msearch').remove();
        $('.mobilenav').hide();
        $('.searchbar').append(dsearch);
    }

    $('.hdr-container').next().css('margin-top', "0px");

    if ($(".mobilenav").is(":visible") == true) {
        $(".mobilehdr .hamburger").unbind("click");
        $(".mobilehdr .hamburger").click();
    }

      if($('.slick-slide').length > 0) {
        $('.penn-info').slick('unslick');
    }

     if($('.slick-slide').length > 0 && $('.pf-pad').length >0) {
        $('.home-slider').slick('unslick');
    }

    // disable nav clicks on top level links
      $(".hdr-info-bot ul > li > a").not(".hdr-info-bot ul li ul a").unbind("click");
      $(".hdr-info-bot ul > li > a").not(".hdr-info-bot ul li ul a").click(function (e) {
          e.preventDefault();
      });

      // search
      $(".preheader .fa-search").unbind("click");
      $(".preheader .fa-search").click(function () {
            if($(".searchbar").css("display") == "none"){
                $(".searchbar").slideToggle("slow", function () { });
            } else if (($(".searchbar").css("display") == "block")) {
                $(".preheader .fa-search").click(function () {
                   $('.searchbar form').submit();
                });
            }
      })


    $(".searchbar .fa-times").unbind("click");
    $(".searchbar .fa-times").click(function () { $(".searchbar").slideToggle("slow", function () { }); });

    // sticky header
    adjustHeader();


    $('.transheader .hamburger').unbind("click");
    $('.transheader .hamburger').click(function () {
        $(this).toggleClass("is-active");

        if ($(this).hasClass("is-active")) {
            $('.transnav').slideDown(500, function () {
                $(".transnav .hdr-info-bot nav").show();
            });
        } else {
            $(".transnav .hdr-info-bot nav").hide();
            $('.transnav').slideUp(500);
        }
    });

    $(".hdr-info-bot a.dropdown").addClass("fa fa-caret-down");
    $(".hdr-info-bot ul li ul li a").removeClass("fa fa-caret-down");


    $(window).scroll(function () {
        adjustHeader();
    });
  }

   

  }



}
