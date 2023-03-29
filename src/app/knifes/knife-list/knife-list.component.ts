import { Component, OnInit } from '@angular/core';
import { Knife } from '../knife.model';
import { KnifeService } from '../knife.service';

@Component({
  selector: 'app-knife-list',
  templateUrl: './knife-list.component.html',
  styleUrls: ['./knife-list.component.scss'],
})
export class KnifeListComponent implements OnInit {
  knifes: Knife[] = [];

  constructor(private knifeService: KnifeService) {}

  ngOnInit(): void {
    this.knifes = this.knifeService.getKnifes();
  }
}
