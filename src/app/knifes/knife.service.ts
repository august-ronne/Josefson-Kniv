import { Injectable } from '@angular/core';
import { Knife } from './knife.model';

@Injectable({
  providedIn: 'root',
})
export class KnifeService {
  private dummyText: string =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
  private knifes: Knife[] = [
    {
      id: 1,
      name: 'Kniv #1',
      materials: ['Trä', 'Metall', 'Horn', 'Sylt'],
      description: this.dummyText,
      price: 3000,
      images: ['', ''],
    },
    {
      id: 2,
      name: 'Kniv #2',
      materials: ['Trä', 'Metall', 'Horn', 'Sylt'],
      description: this.dummyText,
      price: 3500,
      images: ['', ''],
    },
    {
      id: 3,
      name: 'Kniv #3',
      materials: ['Trä', 'Metall', 'Horn', 'Sylt'],
      description: this.dummyText,
      price: 4000,
      images: ['', ''],
    },
  ];

  constructor() {}

  getKnifes(): Knife[] {
    return this.knifes.slice();
  }

  getKnife(knifeID: number): Knife {
    return this.knifes[knifeID - 1];
  }
}
