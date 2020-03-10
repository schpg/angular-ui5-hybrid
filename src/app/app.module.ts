import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { Ui5listenerComponent } from './ui5listener/ui5listener.component';
import {Ui5EventBusService} from './ui5-event-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchpadComponent,
    Ui5listenerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
  ],
  providers: [
    Ui5EventBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
