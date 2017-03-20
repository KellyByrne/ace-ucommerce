import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-interior-hero',
  templateUrl: './interior-hero.component.html',
  styleUrls: ['./interior-hero.component.css']
})

export class InteriorHeroComponent implements OnInit {
  backgroundImage = "/assets/images/Business_Hero.jpg";
  constructor(private _http : Http) { }

  ngOnInit() {
    var rset = $(window).width() - ($('.hdr-info-bot').offset().left + $('.hdr-info-bot').outerWidth());
    $('.gray-hero').css('right', rset);

    $(".see-more a").click(function (e) {
          e.preventDefault();
          var revisedmore = $(this).attr("href").match(/#.+/g).toString().replace("#", "");
          $('html, body').animate({
              scrollTop: $("a[name='" + revisedmore + "']").offset().top - 75
          }, 1000);
      });

      this._http.get('/../business.json').subscribe(result => {console.log(result);})

  }

}
