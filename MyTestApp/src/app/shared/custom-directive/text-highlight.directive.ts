import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[textHighlight]"
})
export class TextHighlightDirective {
  @HostBinding("style.backgroundColor")
  styleBackground: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "green"
    // );
    this.styleBackground = "green";
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "red"
    // );
    this.styleBackground = "red";
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "yellow");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "green"
    // );
    this.styleBackground = "green";
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    // Renderer is useful to avoid XSS attacks
  }
}
