import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { MyTabDirective } from './tabs/tab.directive';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MyTabDirective,
    DynamicTabsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
