import { Component, Input, OnInit } from '@angular/core';
import { Knife } from '../../knife.model';

@Component({
  selector: 'app-knife-list-item',
  templateUrl: './knife-list-item.component.html',
  styleUrls: ['./knife-list-item.component.scss'],
})
export class KnifeListItemComponent implements OnInit {
  @Input() knife!: Knife;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
