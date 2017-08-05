import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[my-highlighter]'
})
export class MyHighlighterDirective {
    @Input() color: string;

    constructor(el: ElementRef) {
        el.nativeElement.style.color = (this.color || 'yellow');
        
    }
}