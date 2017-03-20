import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-key-benefits',
  templateUrl: './key-benefits.component.html',
  styleUrls: ['./key-benefits.component.css']
})
export class KeyBenefitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.b-title a').click(function(e){
        e.preventDefault();
        $(window).scrollTop($('.benefit-blocks').position().top - 300)
    })

        if (Math.max($(window).width(), window.innerWidth) < 1023) { //mobile
         if($('.benefit-blocks-mobile').html() == "") {
            $('.benefit-blocks .ace-benefits').appendTo('.benefit-blocks-mobile');
            $('.benefit-blocks .columns').empty();
        }

            if (Math.max($(window).width(), window.innerWidth) < 767) {
                 if($('.slick-slide').length > 0) {
                    $('.benefit-blocks-mobile').slick('unslick');
                }

                  $('.benefit-blocks-mobile').slick({
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
                    $('.benefit-blocks-mobile').slick('unslick');
                }

                    $('.benefit-blocks-mobile').slick({
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
