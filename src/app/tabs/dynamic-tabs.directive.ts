import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dynamic-tabs]'
})
export class DynamicTabsDirective {
  constructor(public templateRef: TemplateRef<any>) {
    console.log('template', templateRef);
  }
}