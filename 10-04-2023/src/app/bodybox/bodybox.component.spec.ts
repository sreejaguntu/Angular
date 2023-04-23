import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyboxComponent } from './bodybox.component';

describe('BodyboxComponent', () => {
  let component: BodyboxComponent;
  let fixture: ComponentFixture<BodyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
