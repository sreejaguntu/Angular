import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeboxComponent } from './themebox.component';

describe('ThemeboxComponent', () => {
  let component: ThemeboxComponent;
  let fixture: ComponentFixture<ThemeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
