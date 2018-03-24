import { Component, OnInit } from '@angular/core';
import { Experience } from '../-models/experience.model';
import { WorkExperienceService } from '../-services/work-experience.service';
import { Skill } from '../-models/skill.model';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  providers: [WorkExperienceService]
})
export class ResumeComponent implements OnInit {

  constructor(private _workExperienceService: WorkExperienceService) { }

  experiences: Experience[];
  skills: Skill[];

  ngOnInit(): void {
    this._workExperienceService
      .getAllExperiences()
      .subscribe(experiences => this.experiences = experiences);

    this._workExperienceService
      .getAllSkills()
      .subscribe(skills => this.skills = skills);
  }

}
