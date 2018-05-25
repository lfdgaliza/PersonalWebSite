import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { AboutThisProjectComponent } from './components/pages/about-this-project/about-this-project.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ArticleComponent } from './components/pages/article/article.component';


const routes: Routes = [
  { path: "", redirectTo: "about-me", pathMatch: 'full' },
  { path: "about-me", component: AboutMeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "about-this-project", component: AboutThisProjectComponent },
  { path: "contact", component: ContactComponent },
  { path: "articles", component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
