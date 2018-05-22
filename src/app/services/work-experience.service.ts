import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Experience } from '../models/experience.model';
import { Skill } from '../models/skill.model';
import { EXPERIENCES } from './mock/experiences.mock';
import { SKILLS } from './mock/skills.mock';

@Injectable()
export class WorkExperienceService {

  constructor() { }

  getAllExperiences(): Observable<Experience[]> {
    return of(EXPERIENCES);
  }

  getAllSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }

}
