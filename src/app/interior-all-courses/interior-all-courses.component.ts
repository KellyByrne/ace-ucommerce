import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-interior-all-courses',
  templateUrl: './interior-all-courses.component.html',
  styleUrls: ['./interior-all-courses.component.css']
})
export class InteriorAllCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.call-enroll a').click(function(e){
        e.preventDefault();
    });

   if($('.ace .course-ctas .aceenrollnow').length > 0) {
      $('.ace .course-ctas .aceenrollnow').parent().css('padding-top', "30px");
   }

   $('.herotesti').prev().prev().css('border-bottom', 'none');

       $('.course-overview .reqs-a').click(function(e){
            e.preventDefault();
            if($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).parent().parent().parent().find('.course-reqs-show').removeClass('open').addClass('closed');
            } else {
                $(this).addClass('open');
                $(this).parent().parent().parent().find('.course-reqs-show').removeClass('closed').addClass('open');
            }
        })

  }

}
