import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../../models/experience.model';


@Component({
  selector: 'gl-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }
  @Input() experiences: Experience[];

  ngOnInit() {
  }

}
