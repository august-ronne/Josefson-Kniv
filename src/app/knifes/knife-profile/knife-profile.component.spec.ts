import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeProfileComponent } from './knife-profile.component';

describe('KnifeProfileComponent', () => {
  let component: KnifeProfileComponent;
  let fixture: ComponentFixture<KnifeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnifeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnifeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
