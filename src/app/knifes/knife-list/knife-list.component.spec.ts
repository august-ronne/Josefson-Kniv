import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeListComponent } from './knife-list.component';

describe('KnifeListComponent', () => {
  let component: KnifeListComponent;
  let fixture: ComponentFixture<KnifeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnifeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnifeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
