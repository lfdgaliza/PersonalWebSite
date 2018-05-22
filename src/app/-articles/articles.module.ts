import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ReaderComponent } from './components/reader/reader.component';



@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MarkdownModule.forChild()
  ],
  declarations: [ReaderComponent],
  providers: [
    MarkdownService,
    MarkedOptions
  ]
})
export class ArticlesModule { }
