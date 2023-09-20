import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent {
  @Input() page1!: Element;
  @Input() page2!: Element;
  oldScrollY: number = 0;
  scrolling = true;
  constructor(private scroller: ViewportScroller) {

  }

  up() {
    if (!this.scrolling) {
      this.scrolling = true; // Indique que le défilement est en cours
      this.page1.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    }
  }

  down() {
    if (!this.scrolling) {
      this.scrolling = true; // Indique que le défilement est en cours
      this.page2.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    }
  }

  @HostListener('document:scroll')
  scroll() {
    if (!this.scrolling) {
      if (this.oldScrollY < window.scrollY) {
        this.up();
        console.log("up");
      }
      else if (this.oldScrollY > window.scrollY){
        this.down();
        console.log("down");
      }
      this.oldScrollY = window.scrollY;
    }
  }

  // Ajout d'un gestionnaire d'événement pour détecter la fin du défilement
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Vérifie si le défilement est terminé
    if (window.scrollY === 0 || window.scrollY + window.innerHeight === document.body.scrollHeight) {
      this.scrolling = false; // Indique que le défilement est terminé
    }
  }
}


