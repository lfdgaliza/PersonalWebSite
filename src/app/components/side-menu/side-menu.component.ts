import { Component, OnInit, Input } from '@angular/core';
import { BaseMenuItem } from '../../models/base/base-menu-item.model';

@Component({
  selector: 'gl-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() items: BaseMenuItem[];

  constructor() {


  }



  ngOnInit() {

  }

}
