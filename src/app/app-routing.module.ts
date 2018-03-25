import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutThisProjectComponent } from './about-this-project/about-this-project.component';

const routes: Routes = [
  { path: "", redirectTo: "resume", pathMatch: 'full' },
  { path: "home", component: AboutMeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "about-this-project", component: AboutThisProjectComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
