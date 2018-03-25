import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TimelineComponent } from './-shared/timeline/timeline.component';
import { SafeHtmlPipe } from './-pipes/safe-html.pipe';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutThisProjectComponent } from './about-this-project/about-this-project.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TimelineComponent,
    SafeHtmlPipe,
    ContactComponent,
    AboutMeComponent,
    AboutThisProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
