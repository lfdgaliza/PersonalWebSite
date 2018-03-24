import { Injectable } from '@angular/core';
import { Experience } from '../-models/experience.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { EXPERIENCES } from '../-mock/experiences.mock';

@Injectable()
export class WorkExperienceService {

  constructor() { }

  getAllExperiences(): Observable<Experience[]> {
    return of(EXPERIENCES);
  }

}
