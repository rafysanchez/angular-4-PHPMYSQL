import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs/Rx';


import { AppComponent } from './app.component';
import { ListitemComponent } from './item/listitem/listitem.component';
import { DetailitemComponent } from './item/detailitem/detailitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    DetailitemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
