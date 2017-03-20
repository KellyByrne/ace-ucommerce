import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var $;

@Component({
  selector: 'app-interior-tabs',
  templateUrl: './interior-tabs.component.html',
  styleUrls: ['./interior-tabs.component.css']
})
export class InteriorTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if ($('.ace .tabs-info ul.tab-options li .tab-div').length > 0 ) {
        $('.tab-div').appendTo($('.desk-tabs-div'));
    }

    $('.tabs-info .tab-options li').first().addClass('ace-active');
    $('.info-div-0').addClass('ace-active');

  
    $('.tabs-info .tab-options li a.tab-link').click(function(e){
        e.preventDefault();
        $('.tabs-info .tab-options li').removeClass('ace-active');
        $('.tab-div').removeClass('ace-active');
        $(this).parent().addClass('ace-active');

        var index = $(this).parent().index();
        $('.info-div-' + index).addClass('ace-active');


    })

    if (Math.max($(window).width(), window.innerWidth) < 1023) { //mobile
             if ($('.ace .tabs-info ul.tab-options li .tab-div').length == 0 ) {
            $('.tabs-info .tab-options li').each(function(i){
                $(this).append($('.info-div-' + i));
            })
         }

        $('.tabs-info .tab-options li').removeClass('ace-active');
        $('.tab-div').removeClass('ace-active');
        $('.tabs-info .tab-options li').first().addClass('ace-active');
        $('.info-div-0').addClass('ace-active');

        $(".tabs-info .tab-options li a.tab-link").unbind("click");
        $('.tabs-info .tab-options li a.tab-link').click(function(e){
            e.preventDefault();
            $('.tabs-info .tab-options li').removeClass('ace-active');
            $('.tab-div').removeClass('ace-active');
            $(this).parent().addClass('ace-active');

             var acescroll = $(this).offset().top;
            $(window).scrollTop(acescroll -90);

            var index = $(this).parent().index();
            $('.info-div-' + index).addClass('ace-active');


        })

    }
    
  }

}
