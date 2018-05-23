import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkExperienceService } from '../../services/work-experience.service';
import { Experience } from '../../models/experience.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'gl-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  providers: [WorkExperienceService]
})
export class ResumeComponent implements OnInit {

  constructor(private _workExperienceService: WorkExperienceService) { }

  experiences: Experience[];
  skills: Skill[];
  chart: Chart;

  ngOnInit(): void {
    this._workExperienceService
      .getAllExperiences()
      .subscribe(experiences => this.experiences = experiences);

    this._workExperienceService
      .getAllSkills()
      .subscribe(skills => this.skills = skills);

    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      data: {
        labels: ['Listening', 'Speaking', 'Reading', 'Writing'],
        datasets: [
          {
            label: 'English Fluency',
            data: [6, 5, 9, 7]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 10
            }
          }]
        }
      }
    });
  }

}
