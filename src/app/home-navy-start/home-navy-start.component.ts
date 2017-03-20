import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-home-navy-start',
  templateUrl: './home-navy-start.component.html',
  styleUrls: ['./home-navy-start.component.css']
})
export class HomeNavyStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".navy-start a").click(function (e) {
          e.preventDefault();
          var revisedbtnname = $(this).attr("href").match(/#.+/g).toString().replace("#", "");
          $('html, body').animate({
              scrollTop: $("a[name='" + revisedbtnname + "']").offset().top - 45
          }, 1000);
      });
  }

}
