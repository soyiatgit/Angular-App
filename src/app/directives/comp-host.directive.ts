import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[comp-host]',
})
export class CompHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
