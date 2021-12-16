import { Component, Input, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('hideIntro') hideIntro:boolean = false;

  public timeLeft:any = {days:'',hours:'',minutes:'',seconds:''};

  constructor() { }

  ngOnInit(): void {
    console.log();
    
    setInterval(() =>{
      this.makeTimer();  
    },1000);

    $('.mobClick').click(function(){
      $('.siteNav').toggleClass('act');
    });
    $('.siteNav-close').click(function(){
      $('.siteNav').toggleClass('act');
    });
  
    $('.hero-carousal').owlCarousel({
      smartSpeed: 500,
      items: 1,
      margin: 0,
      autoplay:true,
      autoplayTimeout:1000,
      nav: false,
      loop: true,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      animateOut: 'fadeOut'
    });
    $('.hero-carousal2').owlCarousel({
      smartSpeed: 1000,
      items: 1,
      margin: 0,
      autoplay:true,
      autoplayTimeout:5000,
      nav: false,
      loop: true,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      animateOut: 'fadeOut'
    });
    $('.hero-carousal3').owlCarousel({
      smartSpeed: 1500,
      items: 1,
      margin: 0,
      autoplay:true,
      autoplayTimeout:9000,
      nav: false,
      loop: true,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      animateOut: 'fadeOut'
    });

  }

  makeTimer() {
      var endTime:any = new Date("10 December 2021 15:37:25 GMT+01:00");     
      endTime = (Date.parse(endTime) / 1000);

      var now:any = new Date();
      now = (Date.parse(now) / 1000);

      var timeLeft:any = endTime - now;

      var days:any = Math.floor(timeLeft / 86400); 
      var hours:any = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes:any = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds:any = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }
      this.timeLeft = {days:days,hours:hours,minutes:minutes,seconds:seconds};
  }

}
