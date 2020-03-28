import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[myDirective]"
})
export class MyDirective {
  @HostBinding("style.backgroundColor")
  styleOfTheElement: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener("mouseover")
  onMouseOver() {
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    // this.styleOfTheElement = "yellow";
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "yellow"
    );
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    // this.styleOfTheElement = "aqua";
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "aqua"
    );
  }
}
