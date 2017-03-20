import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {
      this._router.events.subscribe((event: any) => {
          if(event instanceof NavigationEnd) {
              $(document).foundation();
          }
      });

       if (Math.max($(window).width(), window.innerWidth) < 1023) { //mobile
          $('.desktoponly').css('display', 'none');
          $('.mobileonly').css('display', 'block');
       } else {
          $('.desktoponly').css('display', 'block');
          $('.mobileonly').css('display', 'none');
       }
  }
      
}
