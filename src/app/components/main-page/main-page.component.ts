import { Component, Input } from '@angular/core';
import { WheelEventService } from 'src/app/services/wheel-event.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./contentTyped.scss']
})
export class MainPageComponent {
  @Input() page1!: Element;
  @Input() page2!: Element;
  constructor(private WheelEventService: WheelEventService) { }

  ngOnInit() {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
        window.scrollTo(0, 0);
    }
  }
}
