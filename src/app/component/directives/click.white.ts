import { Directive, HostListener, ElementRef,Input } from "@angular/core";

@Directive({
  selector: "[click]"
})

export class DirectiveClickWhite {

  @Input() values : any;
  constructor(public el:ElementRef){}

  @HostListener('click') clicks(){

    this.el.nativeElement.style.color="orange"

    setTimeout(() => {
      this.el.nativeElement.style.color=null
    }, 300);

  }

}
