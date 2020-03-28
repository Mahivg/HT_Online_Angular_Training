import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[myLoop]"
})
export class MyStructuralDirective {
  //   @Input() loopCount: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  @Input("myLoop") set _count(count: number) {
    for (var i = 0; i < count; i++) {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }
}
