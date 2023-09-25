import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheelEventService {
  constructor() { }

  scrollTo(top: Element, bottom: Element) {
    window.addEventListener('wheel', event => {
      console.log(event.deltaY);
      if(event.deltaY > 0){
        bottom.scrollIntoView(true);
      }
      if(event.deltaY < 0){
        top.scrollIntoView(true);
      }
    });
  }
}
