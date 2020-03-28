import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[product-text-color]'
})
export class ProductTextColor {

    constructor(private element: ElementRef){
        this.element.nativeElement.style.backgroundColor = 'aqua';
    }

}