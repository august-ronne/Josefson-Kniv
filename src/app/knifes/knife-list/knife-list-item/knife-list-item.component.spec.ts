import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeListItemComponent } from './knife-list-item.component';

describe('KnifeListItemComponent', () => {
  let component: KnifeListItemComponent;
  let fixture: ComponentFixture<KnifeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnifeListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnifeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
