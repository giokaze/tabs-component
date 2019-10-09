import { Directive, Input, QueryList, ContentChild, AfterContentChecked } from '@angular/core';
import { DynamicTabsDirective } from './dynamic-tabs.directive';

@Directive({
  selector: 'my-tab, [my-tab]'
})
export class MyTabDirective implements AfterContentChecked {

  tabs: DynamicTabsDirective;

  @Input() title: String;
  @Input() active = false;
  @ContentChild (DynamicTabsDirective, { static: false }) dynamicTabsDirective: DynamicTabsDirective;

  ngAfterContentChecked() {
    this.tabs = this.dynamicTabsDirective;
  }

}