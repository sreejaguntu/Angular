import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingthemeComponent } from './weddingtheme.component';

describe('WeddingthemeComponent', () => {
  let component: WeddingthemeComponent;
  let fixture: ComponentFixture<WeddingthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingthemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
