import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {

  id = "5349269473001";
  account = "1642697353001";
  def = 'default';
  
  constructor() { }


  ngOnInit() {
    var lset = $(window).width() - ($('.hdr-info-bot').offset().left + $('.hdr-info-bot').outerWidth());
    $('.banner-text').css('left', lset);

     $(".banner-text a").click(function (e) {
            e.preventDefault();
            var revisedbtnname = $(this).attr("href").match(/#.+/g).toString().replace("#", "");
            $('html, body').animate({
                scrollTop: $("a[name='" + revisedbtnname + "']").offset().top - 45
            }, 1000);
        });

  }

}
