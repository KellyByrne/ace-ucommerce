import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.css']
})
export class FeaturedCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     if ($(".ace-course").length > 0) {
        var acecolHeight, titleHeight = -1;

        $('.ace-course .course-info').each(function () {
            acecolHeight = acecolHeight > $(this).outerHeight() ? acecolHeight : $(this).outerHeight();

        });

        $('.ace-course .course-info').each(function () {
            $(this).height(acecolHeight);
            $(this).find(".navy-title").css('bottom', acecolHeight);
            $(this).find(".course-ctas").css('top', acecolHeight);
        });
    }

    $('.call-enroll a').click(function(e){
        e.preventDefault();
    });

  if($('.ace .interior-hero').length > 0) {
     $(".course-ctas a[title='Learn More']").click(function (e) {
            e.preventDefault();
            var revisedname = $(this).attr("href").match(/#.+/g).toString().replace("#", "");
            $('html, body').animate({
                scrollTop: $("a[name='" + revisedname + "']").offset().top - 75
            }, 1000);
        });
     }

   if($('.ace .course-ctas .aceenrollnow').length > 0) {
      $('.ace .course-ctas .aceenrollnow').parent().css('padding-top', "30px");
   }

     $('.ace-courses .course-tag').css('display', 'none');

    if($('.slick-slide').length > 0) {
        $('.course-blocks-mobile').slick('unslick');
    }

    if($('.course-blocks .columns').html() == "") {
          $('.course-blocks-mobile .ace-course').each(function(i){
               $(this).appendTo($('.course-blocks .columns')[i]);
        });
        $('.course-blocks-mobile').empty();
    }

      if (Math.max($(window).width(), window.innerWidth) < 1023) { //mobile
        if($('.course-blocks-mobile').html() == "") {
            $('.ace-courses .course-blocks .ace-course').appendTo('.course-blocks-mobile');
            $('.course-blocks .columns').empty();
        }

        if (Math.max($(window).width(), window.innerWidth) < 767) {
           if($('.slick-slide').length > 0) {
              $('.course-blocks-mobile').slick('unslick');
            }

                $('.course-blocks-mobile').slick({
                    arrows:true,
                    dots:true,
                    infinite:true,
                    draggable: true,
                    swipe:true,
                    speed:500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    freeScroll: true
                 });


            } else {
                 if($('.slick-slide').length > 0) {
                    $('.course-blocks-mobile').slick('unslick');
                }

                    $('.course-blocks-mobile').slick({
                        arrows:true,
                        dots:true,
                        infinite:true,
                        draggable: true,
                        swipe:true,
                        speed:500,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        freeScroll: true
                     });
            }
      }

  }

}
