import { Component, Input, OnInit } from '@angular/core';
import { GroupResponse } from 'src/api/models';
import { Group } from '../models/Group';

@Component({
  selector: 'app-group-tiles-tile',
  templateUrl: './group-tiles-tile.component.html',
  styleUrls: ['./group-tiles-tile.component.css']
})
export class GroupTilesTileComponent implements OnInit {

  constructor() { }
  
  @Input() colorVariant : number;
  @Input() group : GroupResponse;

  ngOnInit(): void {
  }

}
