import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Router } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoComponent } from './photo/photo.component';

const routes =[
  {path:'',component:HomepageComponent},
  {path:'contact',component:ContactComponent},
  {path:'photos',component:PhotoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
