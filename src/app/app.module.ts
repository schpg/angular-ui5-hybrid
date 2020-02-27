import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { Ui5listenerComponent } from './ui5listener/ui5listener.component';
import { Ui5formComponent } from './ui5form/ui5form.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchpadComponent,
    Ui5listenerComponent,
    Ui5formComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
