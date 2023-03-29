import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnifeProfileComponent } from './knifes/knife-profile/knife-profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'om-mig',
    pathMatch: 'full',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: 'kniv/:id', component: KnifeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
