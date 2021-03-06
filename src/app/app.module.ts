import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SMS } from '@ionic-native/sms/ngx';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';

//import { MessageCounterComponent } from './components/message-counter/message-counter.component';

@NgModule({
  declarations: [AppComponent, /*MessageCounterComponent*/],
  entryComponents: [/*MessageCounterComponent*/],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SMS,
    Contacts,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [/*MessageCounterComponent*/]
})
export class AppModule {}
