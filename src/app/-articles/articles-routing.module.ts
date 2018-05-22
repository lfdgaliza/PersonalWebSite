import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaderComponent } from './components/reader/reader.component';

const routes: Routes = [

  { path: "", redirectTo: "reader", pathMatch: 'full' },
  { path: "reader", component: ReaderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
