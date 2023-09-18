import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent {
  @Input() page1!: Element;
  @Input() page2!: Element;

  constructor(private scroller : ViewportScroller ){

  }
  ngOnInit(){
    console.log('OnInit');
  }

  up(){
    this.page1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  down(){
    this.page2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
