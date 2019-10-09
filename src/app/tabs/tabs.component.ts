import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { MyTabDirective } from './tab.directive';

@Component({
  selector: 'my-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  tabItems = [] = [];

  @ContentChildren(MyTabDirective) tabs: QueryList<MyTabDirective>;

  constructor() {}

  ngAfterContentInit() {
    console.log('TABS', this.tabs);
    const activeTabs = this.tabs.filter(tab => tab.active);
    if(activeTabs.length == 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: MyTabDirective) {
    console.log(tab);
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }

}