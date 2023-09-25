import { Component, Input } from '@angular/core';

@Component({
  selector: 'scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent {
  @Input() page1!: Element;
  @Input() page2!: Element;
  constructor() {}

  up() {
    this.page1.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
  }

  down() {
    this.page2.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
  }
}


