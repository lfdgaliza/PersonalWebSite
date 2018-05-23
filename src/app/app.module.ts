import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { PopoverModule } from 'ngx-bootstrap';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';
import { TimelineComponent } from './components/-shared/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { PaperComponent } from './components/-shared/paper/paper.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TimelineComponent,
    SafeHtmlPipe,
    ContactComponent,
    AboutMeComponent,
    AboutThisProjectComponent,
    PaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
