import { Component, Input } from '@angular/core';
import { WheelEventService } from 'src/app/services/wheel-event.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @Input() page1!: Element;
  @Input() page2!: Element;
  constructor(private WheelEventService: WheelEventService) { }

  ngOnInit() {
   this.WheelEventService.scrollTo(this.page1, this.page2);
  }
}
