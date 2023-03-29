import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Knife } from '../knife.model';
import { KnifeService } from '../knife.service';

@Component({
  selector: 'app-knife-profile',
  templateUrl: './knife-profile.component.html',
  styleUrls: ['./knife-profile.component.scss'],
})
export class KnifeProfileComponent implements OnInit {
  knife!: Knife;
  knifeID: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private knifeService: KnifeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.knifeID = +params['id'];
      console.log('knife ID: ' + this.knifeID);
      this.knife = this.knifeService.getKnife(this.knifeID);
    });
  }
}
