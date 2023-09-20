import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.css']
})
export class DarkLightModeComponent {

  @Input() dark: string = "";

  constructor(private el: ElementRef, private renderer:Renderer2){}

  ngOnInit() {
    this.dark = sessionStorage.getItem('dark')!;
    if(!this.dark)
    {
      console.log(this.dark);
      sessionStorage.setItem('dark', 'false');
    }

  }

  ngAfterViewInit(){
    if(sessionStorage.getItem('dark') == 'true'){
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundImage', 'url(\'assets/randoNuit.jpg\')');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundImage', 'url(\'assets/rando.jpg\')');
    }

  }

  darkmode() {
    sessionStorage.setItem('dark', 'true');
    window.location.reload();
  }
  lightmode(){
    sessionStorage.setItem('dark', 'false');
    window.location.reload()
  }
}
