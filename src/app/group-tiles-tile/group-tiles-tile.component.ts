import { Component, Input, OnInit } from '@angular/core';
import { GroupResponse } from 'src/api/models';
import { Group } from '../models/Group';

@Component({
  selector: 'app-group-tiles-tile',
  templateUrl: './group-tiles-tile.component.html',
  styleUrls: ['./group-tiles-tile.component.css']
})
export class GroupTilesTileComponent implements OnInit {
  shedule: Array<string>

  constructor() { }
  
  @Input() colorVariant : number;
  @Input() group : GroupResponse;

  ngOnInit(): void {
    this.shedule = [];
    let week = [
      'ПН',
      'ВТ',
      'СР',
      'ЧТ',
      'ПТ',
      'СБ'
    ]

    this.group.lessonsTime.split("#").forEach((el, i, arr) => {
      if (el && el !== 'null') {
        this.shedule.push(week[i] + ' ' + el);
      }
    });
  }

}
