import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleAccordion();
  }

  toggleAccordion(){
    const accordion = $('.container .label');
    accordion.click(function(e:any){
      for (let i = 0; i < accordion.length; i++) {
        $(accordion[i]).parent('div').removeClass('active');
      }
      $(e.target).parent('div').toggleClass('active');
    })
          
  }

}
