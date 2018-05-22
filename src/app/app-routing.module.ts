import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';

const routes: Routes = [
  { path: "", redirectTo: "about-me", pathMatch: 'full' },
  { path: "about-me", component: AboutMeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "about-this-project", component: AboutThisProjectComponent },
  { path: "contact", component: ContactComponent },
  { path: "articles", loadChildren: 'app/-articles/articles.module#ArticlesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
