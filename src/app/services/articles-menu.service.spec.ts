import { TestBed, inject } from '@angular/core/testing';

import { ArticlesMenuService } from './articles-menu.service';

describe('ArticlesMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesMenuService]
    });
  });

  it('should be created', inject([ArticlesMenuService], (service: ArticlesMenuService) => {
    expect(service).toBeTruthy();
  }));
});
