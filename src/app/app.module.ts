import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PopoverModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/pages/article/article.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { AboutThisProjectComponent } from './components/pages/about-this-project/about-this-project.component';
import { PaperComponent } from './components/paper/paper.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TimelineComponent,
    SafeHtmlPipe,
    ContactComponent,
    AboutMeComponent,
    AboutThisProjectComponent,
    PaperComponent,
    ArticleComponent,
    SideMenuComponent
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
