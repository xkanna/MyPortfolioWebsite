import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSpeechComponent } from './main-speech/main-speech.component';
import { SmallWindowComponent } from './small-window/small-window.component';
import { BigWindowComponent } from './big-window/big-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSpeechComponent,
    SmallWindowComponent,
    BigWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
