import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnifeProfileComponent } from './knife-profile/knife-profile.component';
import { KnifeListComponent } from './knife-list/knife-list.component';
import { KnifeListItemComponent } from './knife-list/knife-list-item/knife-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    KnifeProfileComponent,
    KnifeListComponent,
    KnifeListItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [KnifeListComponent],
})
export class KnifesModule {}
