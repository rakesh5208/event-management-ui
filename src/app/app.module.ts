import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { AppRoutingModule } from './app-routing.module';
import {
  AppLookService,
  DateUtil
} from './services';
import { TimeConverterPipe } from './shared/time-converter.pipe';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    EventsModule,
    AppRoutingModule
  ],
  providers: [AppLookService, DateUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
