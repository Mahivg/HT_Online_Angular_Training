import { Directive, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[myLoop5]"
})
export class MyLoopDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    for (var i = 0; i < 5; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    // this.viewContainerRef.clear();
  }
}
